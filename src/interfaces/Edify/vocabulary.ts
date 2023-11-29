import { IDTO } from '../dto';

export interface IVocabulary extends IDTO {
  word: string;
  wordType: string;
  phonetic: string[];
  meaning: string[];
  preposition?: string[];
  example?: string[];
  audio?: string;
  image?: string;
}
