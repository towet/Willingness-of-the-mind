import { Skill } from '../services/SkillService';

export interface SkillCardProps {
  skill: Skill;
}

export function SkillCard(props: SkillCardProps): JSX.Element;
