export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  status: string;
  statusType: 'active' | 'evolving' | 'upcoming';
  ctaText?: string;
  longDescription?: string;
  highlights?: string[];
  techStack?: string[];
  url?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  highlightLabel?: string;
  contextNote?: string;
  impact?: string;
  details?: string[];
  tools?: string[];
}

export interface JourneyStep {
  id: string;
  stepNumber: string;
  title: string;
  subitems: string;
}

export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  skills: string;
  description: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Formação' | 'Certificação' | 'Parceria Oficial';
  badge?: string;
  highlight?: boolean;
}

export type CertificationItem = CredentialItem;

export interface NowItem {
  id: string;
  icon: string;
  text: string;
  detail?: string;
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
  icon: 'whatsapp' | 'linkedin' | 'instagram';
  isPrimary?: boolean;
}
