import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl="http://localhost:8082/api"

  constructor(private httpClient:HttpClient) { }

  getCustomerList(page: any,size: any):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/getPagable?pageno=${page}&pagesize=${size}`);
  }
  createCustomer(customer:any):Observable<any>{
    return this.httpClient.post<any>(`${this.baseUrl}/addcustomer`,customer);
  }
  getAllCustomer(){
    return this.httpClient.get<any>(`${this.baseUrl}/getCustomer`);
  }
  customerGetbyId(id:number):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/getById/${id}`);
  }
  updateCustomer(id:number,Customer:any):Observable<any>{
    return this.httpClient.put<any>(`${this.baseUrl}/updateCustomer/${id}`,Customer);
  }
  deleteCustomer(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/deleteCustomer/${id}`);
  }

  getCustomerDetails():Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/getCustomerDetails`);
  }

}
