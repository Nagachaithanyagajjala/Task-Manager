import React from 'react';
import { Button } from '@/components/ui/button';

const TaskFilter = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { value: 'all', label: 'All tasks' },
    { value: 'todo', label: 'To do' },
    { value: 'in_progress', label: 'In progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'overdue', label: 'Overdue' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(filter => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? 'default' : 'outline'}
          size="sm"
          onClick={() => onFilterChange(filter.value)}
          className="transition-all duration-200"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default TaskFilter;