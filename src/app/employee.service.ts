import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Employee} from './model/employee';


@Injectable()
export class EmployeeService {
  baseUrl: string;
  apiURL: string;

  constructor(private http:Http) {
    //this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
    this.baseUrl ='https://localhost/TestService2/BookService.svc';
   }

   fetchStories(): Observable<any>{
     return this.http.get(`${this.baseUrl}/GetEmployee`)
                     .map(response=>response.json());
   }

   fetchItem(EmployeeNo: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetEmployee/${EmployeeNo}`)
                    .map(response => response.json());
  }

  fetchItems(page:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/GetEmployee?page=${page}`)
                    .map(response => response.json());
  }

  CreateEmployee(body: Object){

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    debugger;
    let options       = new RequestOptions({ headers: headers });
  console.log(`${this.baseUrl}/AddEmployee`);    
  console.log(JSON.stringify(body));
  console.log(this.http);
  this.http.post(`${this.baseUrl}/AddEmployee`,JSON.stringify(body),options)
                        .map((res:Response) => res.json()).subscribe((response) => {
                          /* this function is executed every time there's a new output */
                         console.log("VALUE RECEIVED: "+response);
                   },
                   (err) => {
                          /* this function is executed when there's an ERROR */
                          console.log("ERROR: "+err);
                   },
                   () => {
                          /* this function is executed when the observable ends (completes) its stream */
                          console.log("COMPLETED");
                   });
    }

}
