import { IDTO } from '../dto';

export interface IVocabulary extends IDTO {
  word: string;
  phonetic: string[];
  meaning: string[];
  preposition: string[];
  wordType: string;
  examples: string[];
  audio?: string;
  image?: string;
}
