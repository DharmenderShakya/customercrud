import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  pageno: any="0";
  pagesize:any="10";
  // customer:any={}
  customer:Array<any>=[];
  constructor(private customerService:CustomerService,private avti:ActivatedRoute,private router:Router) { 
    
    }
  ngOnInit(): void {
    // this.customerService.getCustomerList(this.pageno,this.pagesize);
    this.customerService.getCustomerList(this.pageno,this.pagesize).subscribe((data:any) => {
      this.customer = data.content;
      console.log("fdghjkfdxghjkfcgvh"+this.customer);
    });
  }

  openUpdateModal(customerId:any){
    this.router.navigate(['update', customerId]);
  }

  deleteEmployee(){

  }

  previousPage(){

  }

  nextPage(){

  }

  }

  