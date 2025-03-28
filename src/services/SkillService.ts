import { Skill, ISkill } from '../models/Skill';

const STORAGE_KEY = 'professional_skills';

export class SkillService {
  static getAllSkills(): ISkill[] {
    const skills = localStorage.getItem(STORAGE_KEY);
    return skills ? JSON.parse(skills) : [];
  }

  static async saveSkill(skillData: Omit<ISkill, 'id' | 'createdAt'>, documentFile?: File): Promise<void> {
    const skills = this.getAllSkills();
    
    if (documentFile) {
      // Convert document to base64 for storage
      const documentUrl = await this.fileToBase64(documentFile);
      const skill = new Skill(
        skillData.title,
        skillData.description,
        skillData.imageUrl,
        skillData.learnMoreUrl,
        documentUrl
      );
      
      skills.push(skill);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
    } else {
      const skill = new Skill(
        skillData.title,
        skillData.description,
        skillData.imageUrl,
        skillData.learnMoreUrl
      );
      
      skills.push(skill);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
    }
  }

  private static fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  static getSkillById(id: string): ISkill | undefined {
    const skills = this.getAllSkills();
    return skills.find(skill => skill.id === id);
  }

  static deleteSkill(id: string): void {
    const skills = this.getAllSkills();
    const updatedSkills = skills.filter(skill => skill.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSkills));
  }
}
