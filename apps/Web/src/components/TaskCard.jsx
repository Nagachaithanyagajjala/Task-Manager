import React, {
  useContext,
} from 'react';

import { Link } from 'react-router-dom';

import {
  Calendar,
} from 'lucide-react';

import StatusBadge from './StatusBadge';

import PriorityBadge from './PriorityBadge';

import {
  Avatar,
  AvatarFallback,
} from '@/components/ui/avatar';

import { Button } from '@/components/ui/button';

import { format } from 'date-fns';

import { AuthContext } from '@/contexts/AuthContext';

const TaskCard = ({ task }) => {
  const { currentUser } =
    useContext(AuthContext);

  const getInitials = (name) => {
    if (!name) return '?';

    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="task-card block">

      {/* TASK DETAILS */}
      <Link to={`/tasks/${task._id}`}>
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-foreground text-base leading-snug flex-1 mr-2">
            {task.title}
          </h3>

          <PriorityBadge
            priority={task.priority}
          />
        </div>

        {task.description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {task.description}
          </p>
        )}

        <div className="flex items-center justify-between">
          <StatusBadge
            status={task.status}
          />

          <div className="flex items-center gap-3 text-sm text-muted-foreground">

            {/* DATE */}
            {task.dueDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />

                <span>
                  {format(
                    new Date(
                      task.dueDate
                    ),
                    'MMM d'
                  )}
                </span>
              </div>
            )}

            {/* ASSIGNEE */}
            {task.assignedTo && (
              <Avatar className="w-6 h-6">
                <AvatarFallback className="text-xs bg-primary/10 text-primary">
                  {getInitials(
                    task.assignedTo
                      ?.name
                  )}
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
      </Link>

      {/* ADMIN EDIT BUTTON */}
      {currentUser?.role ===
        'admin' && (
        <div className="mt-4">
          <Link
            to={`/tasks/edit/${task._id}`}
          >
            <Button
              variant="outline"
              className="w-full"
            >
              Edit Task
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TaskCard;