
// export interface Product {
//     id: number;
//     title: string;
//     price: number;
//     category: string;
//     description: string;
//     image: string;
//   }

export interface Product  {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
