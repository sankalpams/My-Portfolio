export type ProjectCategory = 'All' | 'Machine Learning' | 'Deep Learning & NLP' | 'Graph Neural Networks' | 'MLOps & Systems' | 'Full-Stack & Web';

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectArchitectureStep {
  layer: string;
  technology: string;
  responsibility: string;
}

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: ProjectCategory;
  tags: string[];
  status?: 'In Progress' | 'Completed' | 'Production Ready';
  isFYP?: boolean;
  role?: string;
  overview: string;
  bullets: string[];
  keyHighlights: string[];
  architecture?: ProjectArchitectureStep[];
  metrics?: ProjectMetric[];
  githubUrl: string;
  liveUrl?: string;
  dagshubUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  level?: 'Advanced' | 'Proficient' | 'Familiar';
  context?: string;
  isKeySkill?: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface CertificationCourse {
  name: string;
  url: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeUrl?: string;
  certificateUrl?: string;
  skillsLearned: string[];
  courses?: CertificationCourse[];
  category: 'ML/AI' | 'Networking' | 'GenAI';
  featured: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  status?: string;
  summary: string;
  courseworkOrHighlights: string[];
}

export interface QuickFact {
  label: string;
  value: string;
  icon: string;
  subtext?: string;
}
