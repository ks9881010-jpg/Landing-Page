export interface Article {
  id: string;
  title: string;
  publication: string;
  date: string;
  category: 'SEO Architecture' | 'Corporate PR' | 'Editorial & Culture' | 'Brand Voice';
  readTime: string;
  serpRank?: string;
  targetKeyword?: string;
  searchVolume?: string;
  summary: string;
  content: string[];
  tags: string[];
  link?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  role: string;
  duration: string;
  headline: string;
  metricHighlight: string;
  challenge: string;
  strategy: string[];
  results: {
    label: string;
    value: string;
    context: string;
  }[];
  tags: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  isActive?: boolean;
  tags: string[];
  highlights: string[];
  keyOutcomes: string[];
}

export type ActiveScreen = 'portfolio' | 'experience' | 'editorial-archive' | 'case-studies' | 'inquiries';
