import { IDTO } from '../dto';

export interface IWord extends IDTO {
  content: string;
  phonetic: string[];
  meaning: string[];
  partsOfSpeech: string;
  example: string[];
  audio?: string;
  image?: string;
}
