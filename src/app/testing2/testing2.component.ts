import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { RdsDataEntry }  from '../RdsData'

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})


export class Testing2Component implements OnInit {
getDatabase;
postingData;
public rdsData = [];



urlDatabaseLocal = "http://localhost:3000/data/"

  constructor(private httpService : HttpService) { }
  //Post request firing after clicking the POST button - taking in data from the form
  

  onClickSubmit(formData, buttonType ) {
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
    return  this.httpService._getRequest(this.urlDatabaseLocal).subscribe(data=>{
      this.rdsData = data;
      console.log("this is the response object we get ", this.rdsData );
      console.log("type of the array: " ,typeof(this.rdsData));
      console.log("type of the first entry in the array: ",typeof(this.rdsData[1]));
    }, error => {console.log("Error", error)});
  }
  
  ngOnInit() {
    console.log("ngOnInit has fired");
    this.buttonClick3();
  }

  
}
