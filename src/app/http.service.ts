import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_KEY = 'YOUR API KEY'
  constructor(private httpClient: HttpClient) {
    
   }
   _getRequest(){
     console.log("inside _getRequest()")
     return this.httpClient.request("GET","http://localhost:3000/data",{responseType:"json"});
   }
  
   _postRequest(obj){
    console.log(
      "inside _post request"
    )
     return this.httpClient.post( "http://localhost:3000/data",obj).subscribe(data => {console.log("POST was sucessful", data)}, error=>{console.log("Error", error)});
     
   }
}
