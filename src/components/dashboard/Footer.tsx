
import React from 'react';
import { cn } from '@/lib/utils';

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn('border-t border-border py-4 px-6', className)}>
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          © 2025 Spectrum Dashboard. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
