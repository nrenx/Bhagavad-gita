import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'stagger';
}

export function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  return <div className={className}>{children}</div>;
}

export function AnimatedStaggerItem({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function FloatingOm({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function ParallaxElement({ children }: { children: React.ReactNode; speed?: number }) {
  return <div>{children}</div>;
}

export function ParallaxHero({ children, className = '' }: { children: React.ReactNode; backgroundSpeed?: number; midgroundSpeed?: number; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/70 via-red-50/50 to-pink-100/70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-orange-50/30" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function ParallaxText({ children }: { children: React.ReactNode; speed?: number }) {
  return <div>{children}</div>;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

type InteractiveButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function InteractiveButton({ children, className = '', ...props }: InteractiveButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

type InteractiveCardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export function InteractiveCard({ children, className = '', ...props }: InteractiveCardProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

interface MagneticElementProps {
  children: React.ReactNode;
  strength?: number;
}

export function MagneticElement({ children }: MagneticElementProps) {
  return <div>{children}</div>;
}

export function SkeletonLoader({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'image' | 'text' | 'avatar' | 'card'; animated?: boolean }) {
  const variants = {
    default: 'rounded-md',
    image: 'rounded-lg aspect-video',
    text: 'rounded h-4',
    avatar: 'rounded-full aspect-square',
    card: 'rounded-lg p-4 space-y-3',
  } as const;

  if (variant === 'card') {
    return (
      <div className={cn('bg-slate-200 dark:bg-slate-700', variants.card, className)}>
        <div className="bg-slate-300 dark:bg-slate-600 h-4 rounded w-3/4" />
        <div className="bg-slate-300 dark:bg-slate-600 h-4 rounded w-1/2" />
        <div className="bg-slate-300 dark:bg-slate-600 h-4 rounded w-5/6" />
      </div>
    );
  }

  return <div className={cn('bg-slate-200 dark:bg-slate-700', variants[variant], className)} />;
}
