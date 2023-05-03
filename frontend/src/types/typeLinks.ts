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

export interface SubLinkDropdown {
  links: SubLinksWithImage[]
  setImageUrl: (value: React.SetStateAction<string>) => void
}

export interface CategoriesPrime {
  id: string;
  category: "Men" | "Women";
  url: string;
}

export interface StyleProps {
  id: string;
  text: string;
}
[];

export interface LinkProps {
  links: Navlinks[];
}
