// I defined 2 types here, because of the fact that "user" value can be nullish so..

export type TUser = TPureUser | null

export type TPureUser = {
  id: number;
  displayName: string;
  email:string;
}