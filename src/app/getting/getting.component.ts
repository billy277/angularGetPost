import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-getting',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.css']
})
export class GettingComponent implements OnInit {
  getData;
  getIdData;

  url = "http://localhost:3000/data"
  url2 = "http://localhost:3001/iddata"
  
  constructor(private httpService: HttpService) { }


  

//submit database
  onClickSubmit(formData){
    console.log("post request to add a new database")
    console.log("database name is: "+ formData.databaseName)
    return this.httpService._postRequest(this.url,{"content": formData.databaseName});
    }  
  
//get databases
  _buttonClick(){
    console.log("Actually making the request to the service")
    return this.httpService._getRequest(this.url).subscribe((data)=>{
      this.getData = data;
      console.log(this.getData);
    });  
  }


  //These functions tell the component when to run the _buttonClick function above

  ngOnInit() {
    console.log("ngOninit has fired");
    this._buttonClick();
    
  }
  
  // ngOnChanges(){
  //   console.log("ngOnChanges has fired");
  //   this._buttonClick();

  // } 
}
