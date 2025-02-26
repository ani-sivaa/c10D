// Type definitions for the project

export interface CategoryProps {
    id: number;
    title: string;
    description: string;
  }
  
  export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
  }
  
  export interface ProgramProps {
    id: number;
    number: string;
    title: string;
    description: string;
  }
  
  export interface NavLinkProps {
    href: string;
    label: string;
    isActive?: boolean;
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  // For more complex component props
  export interface SectionProps {
    className?: string;
    children: React.ReactNode;
    id?: string;
  }
  
  // For handling social media links in footer
  export interface SocialLink {
    platform: 'instagram' | 'twitter' | 'linkedin' | 'facebook';
    url: string;
    icon: React.ReactNode;
  }