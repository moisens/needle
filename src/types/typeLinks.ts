export interface Navlinks {
  id: string;
  url: string;
  text: string;
  arias?: string;
}
[];

export interface SubLinksWithImage extends Navlinks {
  image: string;
}

export interface CategoriesPrime {
  id: string;
  category: string;
  url: string;
}
[];

export interface StyleProps {
  id: string;
  text: string;
}
[];

export interface LinkProps {
  links: Navlinks[];
}
