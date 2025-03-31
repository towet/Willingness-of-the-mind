export interface ISkill {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  learnMoreUrl: string;
  documentUrl?: string;
  createdAt: string;
}

export class Skill implements ISkill {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  learnMoreUrl: string;
  documentUrl?: string;
  createdAt: string;

  constructor(title: string, description: string, imageUrl: string, learnMoreUrl: string, documentUrl?: string) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.learnMoreUrl = learnMoreUrl;
    this.documentUrl = documentUrl;
    this.createdAt = new Date().toISOString();
  }
}
