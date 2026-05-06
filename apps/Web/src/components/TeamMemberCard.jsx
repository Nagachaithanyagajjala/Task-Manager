import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

const TeamMemberCard = ({ member, onRemove, canRemove = false }) => {
  const getInitials = (name) => {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getRoleColor = (role) => {
    return role === 'admin' 
      ? 'bg-primary/10 text-primary' 
      : 'bg-muted text-muted-foreground';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="w-10 h-10">
          <AvatarFallback className="bg-primary/10 text-primary">
            {getInitials(member.userId)}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <p className="font-medium text-foreground">{member.userId}</p>
          <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${getRoleColor(member.role)}`}>
            {member.role}
          </span>
        </div>
      </div>
      
      {canRemove && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(member.id)}
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default TeamMemberCard;