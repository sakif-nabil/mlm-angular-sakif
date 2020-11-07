import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../model/Order.model';
import {OrderService} from '../services/order.service';
import {CatalogueService} from '../services/catalogue.service';
import {HttpClient} from '@angular/common/http';
import {Payment} from '../model/payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  mode:number=0;
  panelStyle:string= "panel-default";
  paymentAmount:number;
  currentOrder:Order;
  public payment:Payment;
  constructor(public router:Router, public route:ActivatedRoute,
              public orderService:OrderService, public catalService:CatalogueService, private httpClient:HttpClient) { }

  ngOnInit() {
    let id=this.route.snapshot.params.orderID
    this.orderService.getOrder(id).subscribe(data=>{
      this.currentOrder=data;
    },err=>{
      console.log(err);
    })
  }

  onPayOrder(data:any) {
    var answer = window.confirm("are you sure you want to pay this order?")
    if (answer) {
      console.log(data);
      this.catalService.saveResource(this.catalService.host+"/payments",data).subscribe(res=> {
        this.payment = res;
        this.payment.datePayment= new Date();
        console.log(res);
        this.mode = 1;
      },err=>{
        console.log(err);

      })
      //return this.httpClient.post(this.catalService.host+"/payments",this.payment);
      this.panelStyle="panel-success";

    }
    else {
      alert("cool");
    }


  }
}
