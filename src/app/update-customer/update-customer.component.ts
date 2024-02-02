import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit{
  updatedData: any = {};
  customer:any={};
  id:any='';
  customerData={
    id:'',
    firstName:'',
    lastName:'',
    city:'',
    email:'',
    state:'',
    street:'',
    phone:'',
    address:''
  }
  constructor(private route: ActivatedRoute,private customerService: CustomerService){
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(__param=>{
      this.id=__param['id'];
    })
    // const personId = ;
    this.customerService.getAllCustomer().subscribe((data) => {
      this.customer = data;
    });
  }
  updatePerson(): void {
    
    this.customerService.updateCustomer(this.id, this.updatedData).subscribe(
      () => {
        console.log('Person updated successfully');
        // Optional: Redirect to another page after successful update.
      },
      (error: any) => {
        console.error('Error updating person', error);
      }
    );
  }
}
