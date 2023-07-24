export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  gramm: number;
  kkal: number;
  img: string ;
  oldPrice:string;
}
export interface GetOrderType{
  id:number;
  createdAt:string;
  fullName:string;
  mobile:string;
  addres:string;
  apartmenOrOffice:string;
  porch:string;
  flood:string;
  intercom:string;
  comment:string;
  total:number;
  orderSatus:number;

}
export interface GetOrderItemType{
  id:number;
  count:number;
  product:IProduct
}
