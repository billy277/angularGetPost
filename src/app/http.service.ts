import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_KEY = 'YOUR API KEY';
  // changes;
  constructor(private httpClient: HttpClient) {
    
   }
   
   _getRequest(url){
     console.log("inside _getRequest() of the service" + url);
     return this.httpClient.request("GET",url,{responseType:"json"});
   }
  
   _postRequest(url, obj){
    // console.log("updating the changes variable in the service");
    // this.changes = true;
    console.log("inside _post request of the service");
     return this.httpClient.post( url,obj).subscribe(data => {
       console.log("POST was sucessful", data);
      }, error=>{
        console.log("Error", error);
      });  
   }
   

   _putRequest(url, obj){
     console.log("doing a put request");
     console.log('url inside put req: ' + url,obj);
     return this.httpClient.put(url,obj,{responseType:"json"}).subscribe(data=>console.log(data));
     }
   
   
   _patchRequest(url,index,obj){
      var urlObj = url + '/'+index 
      console.log(urlObj);
    return this.httpClient.patch(url,index,obj).subscribe(data=>{
      console.log("PATCH request on index: "+ index + " was sucessful with the data: "+ obj);
    }, error =>{
      console.log("PATCH error", error);
    });
   }
}
