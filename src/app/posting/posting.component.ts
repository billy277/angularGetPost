import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
  getdata;
  postingData;
   url = "http://localhost:3001/iddata"
   url2;
  constructor(private httpService: HttpService) {}
   
   ngOnInit() {
     console.log("ngONINIT INSIDE POSTING")
    this._buttonClick2();
    console.log(this.getdata);
  }
  //this is the function that does the post request to the service

  _buttonClick(){
    
    console.log("making the post request from the posting component to the service");
    this.url2 =  this._generateURLforPUT()
    console.log("the url for the put request is: " + this.url2);
    console.log(this.postingData);
    return this.httpService._putRequest(this.url2, this.postingData);
  }
  _generateURLforPUT(){
    return this.url +"/1";
  }

  _buttonClick2(){
    
    console.log("Actually making the request to the service")
    return this.httpService._getRequest(this.url).subscribe((data)=>{
      this.getdata = data;
      console.log(data);
      console.log(this.getdata);
    });  
  }

//this is the function that fires when the submit button is clicked
  onClickSubmit(formData){
    // alert('data has been pushed into the postingData variable inside the component');
    this.postingData = {"data": formData.content};
    console.log(this.postingData);
    // alert("now the _buttonClick function in the posting component is being called");
    this._buttonClick();
    this._buttonClick2();
  }

//  _patchEntry(formData){
//   alert('this is the data that will be patched in the Posting Data Variable: ' + formData.input)
//   this.httpService._patchRequest(this.url,formData.index,formData.input)
//  }

}
