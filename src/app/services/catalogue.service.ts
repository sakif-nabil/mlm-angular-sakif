import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/Order.model';
import {Payment} from '../model/payment.model';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:string=
    // "http://localhost:8080/mlm-ecom-v1-0.0.1-SNAPSHOT";(deploy Apache)
    "http://localhost:8080";
    //"https://mlmback.herokuapp.com";

  constructor(private http:HttpClient) {
  }

  public getResource(url){
    return this.http.get(url);
  }
  uploadPhotoProduct(file: File, idProduct): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.host+'/uploadPhoto/'+idProduct, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public patchResource(url,data){
    return this.http.patch(url,data);
  }
  public saveResource(url,data):Observable<Payment> {
    return this.http.post<Payment>(url, data);

  }
  public saveResourceProduct(url,data):Observable<Product> {
    return this.http.post<Product>(url, data);

  }
  public deleteResource(url){
    return this.http.delete(url);
  }
}
