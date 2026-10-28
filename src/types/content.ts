export interface SiteMetadata {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
}

export interface HeroContent {
  heading: string;
  subheading?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  image?: {
    src: string;
    alt: string;
  };
}

export interface Metric {
  value: string;
  label: string;
}

export interface SocialProofContent {
  metrics: Metric[];
}

export interface Project {
  title: string;
  description: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
  tags?: string[];
}

export interface FeaturedProjectsContent {
  heading: string;
  projects: Project[];
}

export interface AboutContent {
  heading: string;
  body: string;
  image?: {
    src: string;
    alt: string;
  };
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ProcessContent {
  heading: string;
  steps: ProcessStep[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

export interface TestimonialsContent {
  heading: string;
  testimonials: Testimonial[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  heading: string;
  items: FAQItem[];
}

export interface FinalCtaContent {
  heading: string;
  subheading?: string;
  cta?: CTA;
}

export interface FooterContent {
  navItems: NavItem[];
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  social?: NavItem[];
  copyright?: string;
}
