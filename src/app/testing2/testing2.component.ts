import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { rdsData }  from '../rdsData'

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})


export class Testing2Component implements OnInit {
getDatabase;
postingData;


urlDatabaseLocal = "http://localhost:3000/data/"

  constructor(private httpService : HttpService) { }
  //Post request firing after clicking the POST button - taking in data from the form
  
  
  onClickSubmit(formData, buttonType ) {
    if(buttonType ==='post'){
      alert("about to make a post request with " +  formData.content);
    
      // this.postingData = new rdsData(20,formData.Content);
      this.postingData = {
  
        "content": formData.content,
        "name":formData.name,
      };
      console.log("completed the onClickSubmit for posting  here is posting data:   ", this.postingData);
      
      return this.httpService._postRequest(this.urlDatabaseLocal, this.postingData);
    }
    if(buttonType==='delete'){
      alert("about to make a delete request with id " + formData.id);
     let urlDatabaseLocal = this.urlDatabaseLocal + formData.id;
      return this.httpService._deleteRequest(urlDatabaseLocal);
    }
    if(buttonType==='put'){
      alert("about to make a put request to change the object with id " + formData.id);
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
      this.getDatabase = data;
      console.log("this is the response object we get ", this.getDatabase );
    }, error => {console.log("Error", error)});
  }
  
  ngOnInit() {
    console.log("ngOnInit has fired");
    this.buttonClick3();
  }

  
}
