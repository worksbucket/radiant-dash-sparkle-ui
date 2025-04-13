
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  color: 'purple' | 'blue' | 'orange' | 'pink' | 'green';
  className?: string;
};

const StatCard = ({ title, value, description, icon: Icon, color, className }: StatCardProps) => {
  const colorClass = {
    purple: 'stat-card-purple',
    blue: 'stat-card-blue',
    orange: 'stat-card-orange',
    pink: 'stat-card-pink',
    green: 'stat-card-green',
  }[color];

  return (
    <div className={cn('stat-card', colorClass, className)}>
      <div className="card-glow" />
      <div className="relative z-10">
        <p className="text-sm font-medium text-white/80">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        {description && (
          <p className="text-sm text-white/70 mt-1">{description}</p>
        )}
      </div>
      <div className="card-icon">
        <Icon className="h-8 w-8" />
      </div>
    </div>
  );
};

export default StatCard;
