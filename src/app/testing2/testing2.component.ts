import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})
export class Testing2Component implements OnInit {
getDatabase;
urlDatabaseLocal = "http://localhost:3000/rds/"

  constructor(private httpService : HttpService) { }



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
