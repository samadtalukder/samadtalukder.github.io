export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface About {
  name: string;
  title: string;
  bio: string;
  email: string;
  mobile: string;
  image: string;
  address: string;
  social: SocialLink[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibility: string[];
  description?: string;
}

export interface Education {
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
}

export interface Recommendation {
  name: string;
  company: string;
  position: string;
  feedback: string;
  created_at?: string;
  createdAt?: string;
}

export interface ProjectItem {
  name: string;
  image: string;
  url: string;
  description: string;
  category: string;
}

export interface Projects {
  completeApps: ProjectItem[];
  smallProjects: ProjectItem[];
}

export interface Contact {
  email: string;
  message: string;
  latitude: string;
  longitude: string;
}

export interface ResumeData {
  about: About;
  hireMe: string[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  recommendations: Recommendation[];
  projects: Projects;
  contact: Contact;
}
