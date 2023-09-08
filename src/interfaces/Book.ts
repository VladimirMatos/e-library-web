import { ICategory } from "./Category";
import { IUser } from "./User";

export interface ICreateBook {
  title: string;
  description: string;
  categoryId: number;
  authorId: number;
  text: string;
  image: {
    base64: string;
    name: string;
  };
}

export interface IBook {
  id: number;
  title: string;
  description: string;
  totalPage: number;
  imageUrl: string;
  category: ICategory;
  bookPage: {
    id: number;
    page: number;
    text: string;
  };
  author: IUser;
  createAt: string;
}
