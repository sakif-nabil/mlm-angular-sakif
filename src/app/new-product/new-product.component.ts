import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../services/catalogue.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  mode: number=1;
  newProduct:Product;

  constructor(private catService:CatalogueService) { }

  ngOnInit(): void {
  }

  onSaveProduct(data: any) {
    this.catService.saveResourceProduct(this.catService.host+"/products",data)
      .subscribe(res=> {
        // this.router.navigateByUrl("/products");
        this.newProduct=res;
        console.log(data);

this.mode=2;
      },err=>{
        console.log(err);
      })
  }

  onNewProduct() {
this.mode=1;
  }
}
