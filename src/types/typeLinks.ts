export interface Navlinks {
  id: string;
  url: string;
  text: string;
  arias?: string;
}[];

export interface CategoriesPrime {
  id: string;
  category: string;
}[];

export interface StyleProps {
  id: string;
  text: string;
}[];


export interface FooterLinkProps {
  links: Navlinks[]
}