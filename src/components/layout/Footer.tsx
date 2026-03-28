"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card text-card-foreground border-t border-border py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Bleenk Shop</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Discover premium products crafted with care and precision. Your ultimate destination for quality and style.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay up to date with our latest products and offers.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p className="mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Bleenk Shop. All rights reserved.</p>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "hsl(var(--primary))" }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
