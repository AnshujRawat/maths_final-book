export interface Page {
  id: number;
  title: string;
  subtitle?: string;
  type: 'cover' | 'toc' | 'content' | 'quiz' | 'references';
  content?: Content[];
}

export interface Content {
  type: 'text' | 'heading' | 'definition' | 'example' | 'venn' | 'list' | 'formula' | 'collapsible' | 'table';
  text?: string;
  level?: number;
  title?: string;
  content?: any;
  setA?: number[];
  setB?: number[];
  operation?: 'union' | 'intersection' | 'difference' | 'complement';
  items?: string[];
  ordered?: boolean;
  formula?: string;
  description?: string;
  headers?: string[];
  rows?: string[][];
  index?: number;
}