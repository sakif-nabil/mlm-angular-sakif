import {Order} from './Order.model';

export class Payment{
  id:number;
   datePayment:Date ;
   cardNumber:number ;
   cardType:String ;

   order:Order ;
}
