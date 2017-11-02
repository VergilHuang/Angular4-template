export interface Link {
  title: string;
  url: string;
  isGroup?: boolean;
  subLinks?: Link[];
  state?: string; // 是否展開  或 收束 collepse
}
