export interface initialValueProps {
    fullName: string;
    mobile: string;
    address: string;
    appartmentOrOffice: string;
    porch: string;
    floor: string;
    intercom: string;
    comment: string;
  }

  export interface ProductProps {
    id: number;
    count: number | undefined;
  }
  export interface ReturnProductProps {
    name:string;
    price:number;
    id: number;
    description:string;
    count: number;
  }
  export interface CehckPropsType {
    fullName: string;
    mobile: string;
    address: string;
    appartmentOrOffice: string;
    porch: string;
    floor: string;
    intercom: string;
    comment: string;
    itemList: ProductProps[];
  }

  export interface ReturnPropsType{
    totalCost:number;
    fullName: string;
    phoneNumber: string;
    address: string;
    appartmentOrOffice: string;
    porch: string;
    floor: string;
    intercom: string;
    comment: string;
    products: ReturnProductProps[];
  }

  export interface FetchPropsType{
    totalCost:number;
    fullName: string;
    phoneNumber: string;
    address: string;
    appartmentOrOffice: string;
    porch: string;
    floor: string;
    intercom: string;
    comment: string;
    itemList: ReturnProductProps[];
  }