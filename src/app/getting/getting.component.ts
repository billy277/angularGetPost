import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-getting',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.css']
})
export class GettingComponent implements OnInit {
  getData;
  constructor(private httpService: HttpService) { }



  ngOnInit() {
    this.httpService._getRequest().subscribe((data)=>{
      console.log("inside the subscribe method");
      console.log(data);
      this.getData = data;
      console.log("logging the data from getData")
      console.log(this.getData);
    });   
  }
  _buttonClick(){
    this.httpService._postRequest({"data": "testing2"});  

  }

}
