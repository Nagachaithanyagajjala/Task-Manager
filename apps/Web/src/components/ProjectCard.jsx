import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckSquare } from 'lucide-react';
import StatusBadge from './StatusBadge';

const ProjectCard = ({ project, taskCount = 0, memberCount = 0 }) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card block">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-foreground text-lg leading-snug flex-1 mr-2">
          {project.name}
        </h3>
        <StatusBadge status={project.status} />
      </div>
      
      {project.description && (
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
      )}
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <CheckSquare className="w-4 h-4" />
          <span>{taskCount} tasks</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          <span>{memberCount} members</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;