import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyServiceExampleService {

  private serviceMessage : string = "Hello from service";

  getServiceMessage(): string {
    return this.serviceMessage;
  }
  setServiceMessage(message: string): void {
    this.serviceMessage = message;
  }

  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts() : Observable<any>{
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error : HttpErrorResponse){
    console.log(error);
    return throwError(()=> new Error("Something went wrong!"));
  }

}
