export type TUser = {
  id: string;
  displayName: string;
  email:string,
  basket: {
    items: {
      id: string;
      name: string;
      color: string;
      price: number;
    }[] | null;
    totalPrice: number;
  };
};
