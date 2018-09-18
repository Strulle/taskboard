import { Card } from './card';

export interface Task extends Card {
  guid: string;
  isFavorite: boolean;
  isInProgress: boolean;
  isComplete: boolean;
}
