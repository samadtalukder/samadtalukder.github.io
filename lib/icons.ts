import { Github, Linkedin, Facebook, BookOpen, Globe, Smartphone, Users } from 'lucide-react';

export const socialIcons: Record<string, any> = {
  'fa-linkedin': Linkedin,
  'fa-github': Github,
  'fa-medium': BookOpen,
  'fa-facebook': Facebook,
  'fa-globe': Globe,
};

export const serviceIcons: Record<string, any> = {
  'smartphone': Smartphone,
  'users': Users,
  'globe': Globe,
};

export function getSocialIcon(iconName: string) {
  return socialIcons[iconName] || Globe;
}

export function getServiceIcon(iconName: string) {
  return serviceIcons[iconName] || Globe;
}
