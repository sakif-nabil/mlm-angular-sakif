import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CatalogueService} from '../services/catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
arbre:any;
mode:number=0;
  constructor(private httpClient: HttpClient, private catService:CatalogueService, public router:Router) {
  }

  ngOnInit(): void {
     this.getTrees();
  }

   getTrees() {
    this.catService.getResource(this.catService.host+"/trees")
      .subscribe(data=>{
        this.arbre=data;
      },err=>{
        console.log(err);
      })
  }

  onProfile() {

    this.mode=1
  }
  onProfile1() {

    this.mode=2
  }
  onProfile2() {

    this.mode=3
  }
  onProfile3() {

    this.mode=4
  }
  onProfile4() {

    this.mode=5
  }
  onProfile5() {

    this.mode=6
  }
  onProfile6() {

    this.mode=7
  }
  onZero(){
    this.mode=0
  }
}
