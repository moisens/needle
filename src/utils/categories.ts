import { CategoriesPrime, Navlinks, StyleProps } from "../types/typeLinks";


export const primaryCategories: CategoriesPrime[] = [
  { 
    id: "e042c71c-6ec8", 
    category: 'Women',
    url: "women"
  },
  { 
    id: "e042ca3c-6ec8", 
    category: 'Men',
    url: "men"
  }
]


export const linksBtns: Navlinks[] = [
  {
    id: "a7244732-7038",
    url: "/women",
    text: "Women",
    arias: "Link to women category"
  },
  {
    id: "a7244cf0-7038",
    url: "/men",
    text: "Men",
    arias: "Link to men category"
  }
]


export const chooseStyles:StyleProps[] = [
  {
    id: "f1478b86-70fa",
    text: "WOMEN STYLE",
  },
  {
    id: "f1478f5a-70fa",
    text: "MEN STYLE",
  },
];