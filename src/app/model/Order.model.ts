import {Client} from './client.model';
import {ItemProduct} from './item-product.model';

export class Order {
  public id:number;
  public client:Client={name:"",address:"",phoneNumber:"",email:"",username:"",upuser:""};
  public products:Array<ItemProduct>=[];
  public totalAmount:number;
  public date:Date;
}
