import resumeDataJson from '@/public/resume_data.json';
import type { ResumeData } from '@/types/resume';

export const resumeData = resumeDataJson as ResumeData;

export const { about, hireMe, skills, experience, education, recommendations, projects, contact } = resumeData;

// Helper function to get formatted date
export const getRecommendations = () => {
  return resumeData.recommendations.map(rec => ({
    ...rec,
    date: rec.created_at || rec.createdAt || '',
  }));
};
