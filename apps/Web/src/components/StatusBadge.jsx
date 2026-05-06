import React from 'react';
import { cn } from '@/lib/utils';

const StatusBadge = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'todo':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      case 'overdue':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'archived':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'in_progress':
        return 'In progress';
      case 'todo':
        return 'To do';
      case 'completed':
        return 'Completed';
      case 'overdue':
        return 'Overdue';
      case 'active':
        return 'Active';
      case 'archived':
        return 'Archived';
      default:
        return status;
    }
  };

  return (
    <span className={cn('status-badge', getStatusStyles())}>
      {getStatusLabel()}
    </span>
  );
};

export default StatusBadge;