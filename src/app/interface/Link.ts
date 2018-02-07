// This is an interface of an router link.
export interface Link {
  display: string; // the display shows
  title?: string; // title attribution
  url?: string; // href string
  isGroup?: boolean; // is't  contain sublink?
  subLinks?: Link[]; // sublinks array
  state?: string; // dropdown or collepse
}

