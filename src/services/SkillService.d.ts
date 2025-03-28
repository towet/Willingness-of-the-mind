export interface Skill {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  learnMoreUrl: string;
  documentUrl?: string;
  createdAt: string;
}

export class SkillService {
  static getAllSkills(): Skill[];
  static saveSkill(skillData: Omit<Skill, 'id' | 'createdAt'>, documentFile?: File): void;
  static getSkillById(id: string): Skill | undefined;
  static deleteSkill(id: string): void;
}
