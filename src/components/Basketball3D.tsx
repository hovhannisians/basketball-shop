"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Basketball3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    
    // Use container dimensions instead of window
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- ADVANCED LIGHTING SETUP ---
    
    // 1. Ambient Light - Soft baseline
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // 2. Key Light - Main source from top-right
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    // 3. Fill Light - Warmth from the left
    const fillLight = new THREE.PointLight(0xff7733, 0.8);
    fillLight.position.set(-5, 2, 2);
    scene.add(fillLight);

    // 4. Rim Light - High intensity back-light to define silhouette
    const rimLight = new THREE.SpotLight(0xffffff, 2.0);
    rimLight.position.set(-2, 4, -8);
    scene.add(rimLight);

    // 5. Bounce Light - Simulated reflection from the "floor"
    const bounceLight = new THREE.PointLight(0x4444ff, 0.3);
    bounceLight.position.set(0, -5, 0);
    scene.add(bounceLight);

    // --- ENHANCED TEXTURE GENERATION ---
    const size = 2048; // Increased size for better quality
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.fillStyle = '#d35400';
      ctx.fillRect(0, 0, size, size);

      const imgData = ctx.getImageData(0, 0, size, size);
      const data = imgData.data;

      for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
              const idx = (y * size + x) * 4;
              const u = x / size;
              const v = y / size;
              const phi = u * Math.PI * 2;
              const theta = v * Math.PI;

              const px = Math.sin(theta) * Math.cos(phi);
              const py = Math.cos(theta);
              const pz = Math.sin(theta) * Math.sin(phi);

              const thickness = 0.022;
              let isSeam = false;

              // Seam 1 & 2: Main rings
              if (Math.abs(px) < thickness || Math.abs(pz) < thickness) {
                  isSeam = true;
              }
              
              // Seam 3 & 4: Curves
              const sCurveOffset = 0.68;
              const circleRadius = 0.72;
              const d1 = Math.sqrt(Math.pow(py - sCurveOffset, 2) + Math.pow(px, 2));
              const d2 = Math.sqrt(Math.pow(py + sCurveOffset, 2) + Math.pow(px, 2));
              
              if (Math.abs(d1 - circleRadius) < thickness || 
                  Math.abs(d2 - circleRadius) < thickness) isSeam = true;

              if (isSeam) {
                  data[idx] = 15; data[idx+1] = 15; data[idx+2] = 15;
              } else {
                  // Add "Pebbles" - micro variations
                  const pebble = Math.random() * 25;
                  data[idx] = Math.max(0, data[idx] - pebble);
                  data[idx+1] = Math.max(0, data[idx+1] - pebble);
                  data[idx+2] = Math.max(0, data[idx+2] - pebble);
              }
          }
      }
      ctx.putImageData(imgData, 0, 0);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16; // Set anisotropy to 16 for better quality
    
    // --- PHYSICAL MATERIAL ---
    const material = new THREE.MeshPhysicalMaterial({
        map: texture,
        bumpMap: texture,
        bumpScale: -0.05,
        roughness: 0.75,
        metalness: 0.0,
        clearcoat: 0.05,        // Adds a very subtle light sheen
        clearcoatRoughness: 0.4,
        sheen: new THREE.Color(0xd35400), // Soft orange highlight on edges
        sheenRoughness: 0.5
    });

    const geometry = new THREE.SphereGeometry(2, 128, 128); // Increased segments for better quality
    const ball = new THREE.Mesh(geometry, material);
    scene.add(ball);

    // --- Interaction ---
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const handleDown = (x: number, y: number) => {
        isDragging = true;
        previousMouseX = x;
        previousMouseY = y;
    };

    const handleMove = (x: number, y: number) => {
        if (isDragging && ball) {
            const dx = x - previousMouseX;
            const dy = y - previousMouseY;
            ball.rotation.y += dx * 0.005;
            ball.rotation.x += dy * 0.005;
            previousMouseX = x;
            previousMouseY = y;
        }
    };

    const onMouseDown = (e: MouseEvent) => handleDown(e.clientX, e.clientY);
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onMouseUp = () => { isDragging = false; };

    const onTouchStart = (e: TouchEvent) => handleDown(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onTouchEnd = () => { isDragging = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    container.addEventListener('touchstart', onTouchStart, {passive: false});
    window.addEventListener('touchmove', onTouchMove, {passive: false});
    window.addEventListener('touchend', onTouchEnd);

    const handleResize = () => {
        if (!container) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        if (ball && !isDragging) {
            ball.rotation.y += 0.0015;
            ball.rotation.z += 0.0005;
        }
        renderer.render(scene, camera);
    }

    animate();

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing">
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute bottom-4 text-white/40 font-sans uppercase tracking-[3px] text-[10px] pointer-events-none select-none">
        Drag to Inspect Ball
      </div>
    </div>
  );
}