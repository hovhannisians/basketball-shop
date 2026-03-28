'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Funnel, X } from 'lucide-react';

const FilterBar: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['Shoes', 'Apparel', 'Accessories'];

  const toggleFilters = () => setShowFilters(!showFilters);

  const selectCategory = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 md:px-6 mb-12"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Filter by Category</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleFilters}
          className="flex items-center gap-2"
          aria-expanded={showFilters}
          aria-controls="filter-options"
        >
          {showFilters ? <X className="h-4 w-4" /> : <Funnel className="h-4 w-4" />}
          {showFilters ? 'Close' : 'Open'} Filters
        </Button>
      </div>

      {showFilters && (
        <motion.div
          id="filter-options"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 flex flex-wrap gap-4"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => selectCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
};

export default FilterBar;
