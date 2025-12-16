import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageAlt: string;
  accentColor: 'blue' | 'green' | 'default';
  features: string[];
  isRightAligned?: boolean;
}
