import { Component, OnInit, SimpleChange, SimpleChanges, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { RdsData }  from '../RdsData'
import { Observable } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.css']
})


export class Testing2Component implements OnInit {
getDatabase: any;
public rdsData: Observable<RdsData[]>;
// public rdsDataObjectsArray: RdsData[];
rdsDataObj: RdsData = {
  id: null,
  content: "",
  name: "",
  sex: "",
  url: "",
};


urlDatabaseLocal = "http://localhost:3000/data/"

  constructor(private httpService : HttpService, private router: Router) { }
  //Post request firing after clicking the POST button - taking in data from the form
  deleteRow(id){
    alert("about to make a delete request with " + id);
     let urlDatabaseLocal = this.urlDatabaseLocal + id;
     this.httpService._deleteRequest(urlDatabaseLocal);
     this.buttonClick3();
  }


  updateButton(data: RdsData[]){
        this.router.navigateByUrl('/update',{state: data});
  }


  onClickSubmit(formData ) {
      alert("about to make a post request with " +  formData.content);
      this.rdsDataObj;
      console.log("completed the onClickSubmit for posting  here is posting data:   ", this.rdsDataObj);
      console.log("this is the current data obj ",this.rdsDataObj);
      this.httpService._postRequest(this.urlDatabaseLocal, this.rdsDataObj).subscribe(
        // data => console.log(data)
      );
      this.buttonClick3();
    }

  //Get Request Function in a button
  buttonClick3(){
    console.log("Actually making the request to the service for the database");
      this.rdsData = this.httpService._getRequest(this.urlDatabaseLocal);
      // this.httpService._getRequest(this.urlDatabaseLocal).subscribe(
      //   (data) => {this.rdsDataObjectsArray = data
      //     console.log(this.rdsDataObjectsArray);
      //   }
      // ) ;
  }

  ngOnInit() {
    console.log("ngOnInit has fired");
    this.buttonClick3();
    
  }
}
