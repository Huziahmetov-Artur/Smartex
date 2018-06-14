export class User {
  id: number;
  name: string;
  first_name: string;
  picture: {};
  admin: boolean;
}
export class App {
  content_rating: string;
  app_name: string;
  app_short: string;
  url: string;
  file_size:  string;
  publisher_name:  string;
  id:  string;
  downloads:  string;
  all_rating:  string;
  type:  string;
  top_developer: boolean;
  version:  string;
  permissions: any[];
  price:  string;
}
export enum sort {
  NAME = 'app_name',
  RATING= 'all_rating',
  SIZE= 'file_size',
  VERSION= 'version'
}
export enum size {
  SMALL = 'small',
  NORMAL = 'normal',
  BIG = 'big'
}
export enum color {
  WHITE = 'white',
  BLUE = 'blue',
  PURPLE = 'purple'
}
