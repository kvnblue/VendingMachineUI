import { Component } from '@angular/core';
import {ProductServiceService} from './product-service.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Response } from './Response';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Error } from 'src/app/Error';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductServiceService],

})
export class AppComponent implements OnInit{
  title = 'Vending Machine';
  categories: any ;
  message = 'Welcome';
  errorObject:any;
  public purchaseDetailsVisible = false;
  public selectedProductVisible = false;
  public selectedProductAlertVisible = false;
  public errorAlertVisible = true;
  public selectAlert = false;
  
  selectedProductName : any;
  selectedProductPrice : any;
  selectedItemID='0';
  amountPaid: any;
  err : any;
  response=Response;
  httpResponse=HttpErrorResponse;
  purchaseFeedback : any;
  
  constructor(public appService: ProductServiceService) { }

  ngOnInit() {
    this.appService.getProductCategories().subscribe(data => {
     this.categories = data
     
    });
  }
    
  buySelectedItem()
  {
    if(this.selectedItemID!='0') {
  this.appService.submitItemSelection(this.selectedItemID,this.amountPaid).subscribe(data=>{
 
  this.response=data;
  this.amountPaid='';
  this.purchaseDetailsVisible = true;
  
   setTimeout(function() {
    this.amountPaid='';
    this.selectedItemID='0';
    this.selectedProductPrice='';
    this.purchaseDetailsVisible = false;
    this.selectedProductVisible=false;
    this.selectAlert=false;
        
}.bind(this), 3000);
this.selectedItemID='0';
 this.appService.getProductCategories().subscribe(data => {
    this.categories = data});
 },error=>{this.httpResponse=error;
  this.amountPaid='';
  if(this.httpResponse!=null){
  this.amountPaid='';
  this.errorObject=error.error;
  this.selectedProductVisible=false;
  this.selectedProductAlertVisible=true;
  setTimeout(function() {
  this.amountPaid='';
  this.errorObject='';
  this.httpResponse='';
  this.selectedItemID='0';
  this.selectedProductAlertVisible=false;
  this.selectedProductPrice='';
  this.selectAlert=false;
    
  
}.bind(this), 2000);}});
}
else  {
  this.amountPaid='';
  this.selectAlert=true;
  
  setTimeout(function() {
    this.amountPaid='';
    this.selectAlert=false;
    
}.bind(this), 2000);
}
}

  clicked(event) {
    
    this.selectedProductName = 'You Selected : '+event.productName ; 
    this.selectedProductPrice ='R'+ event.price;
    this.selectedItemID=event.id;
    this.selectAlert=false;
    this.selectedProductVisible=true;
    this.purchaseDetailsVisible = false;
    
  }

  resetAmount() {
    this.amountPaid='';
    this.selectedItemID='0';
    this.selectedProductPrice='';
    this.purchaseDetailsVisible = false;
    this.selectedProductVisible=false;
    this.selectedProductAlertVisible=false;
  }

}




