import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { RdsData }  from '../RdsData'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})


export class Testing2Component implements OnInit {
getDatabase: any;
postingData: { "content": any; "name": any; "sex": any; "url": string; };
public rdsData: Observable<RdsData[]>;
public rdsDataObjectsArray: RdsData[];



urlDatabaseLocal = "http://localhost:3000/data/"

  constructor(private httpService : HttpService) { }
  //Post request firing after clicking the POST button - taking in data from the form
  

  onClickSubmit(formData: { content: string; name: string; id: string; }, buttonType: string ) {
    if(buttonType ==='post'){
      alert("about to make a post request with " +  formData.content);
      this.postingData = {
        
        "content": formData.content,
        "name": formData.name,
        "sex": formData.id,
        "url": "string"
       

      }
      console.log("completed the onClickSubmit for posting  here is posting data:   ", this.postingData);
      
      return this.httpService._postRequest(this.urlDatabaseLocal, this.postingData).subscribe((data) =>console.log("post was sucessful with, " , data));
    }


    if(buttonType==='delete'){
      alert("about to make a delete request with " + formData.id);
     let urlDatabaseLocal = this.urlDatabaseLocal + formData.id;
      return this.httpService._deleteRequest(urlDatabaseLocal);
    }
    if(buttonType==='put'){
      alert("about to make a put request with " + formData.name);
      let urlDatabaseLocal = this.urlDatabaseLocal +formData.id;
      let object = {
        "content": formData.content,
        "name": formData.name,
        "sex":"kept empty"
      }
      return this.httpService._putRequest(urlDatabaseLocal, object);
    }
   
    
  }


  
  
  //Get Request Function in a button
  buttonClick3(){
    console.log("Actually making the request to the service for the database");
      // this.rdsData = this.httpService._getRequest(this.urlDatabaseLocal);
      this.httpService._getRequest(this.urlDatabaseLocal).subscribe(
        (data) => {this.rdsDataObjectsArray = data
          console.log(this.rdsDataObjectsArray);
        }
      );
  }


  
  ngOnInit() {
    console.log("ngOnInit has fired");
    this.buttonClick3();
  }

  
}
