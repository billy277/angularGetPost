import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {

  constructor(private httpService: HttpService) {}
   postingData;
   url = "http://localhost:3000/data"


   ngOnInit() {
  }
  //this is the function that does the post request to the service

  _buttonClick(){
    console.log("making the post request from the posting component to the service");
    this.httpService._postRequest(this.url, this.postingData);
  }
  
//this is the function that fires when the submit button is clicked
  onClickSubmit(formData){
    alert('data has been pushed into the postingData variable inside the component');
    this.postingData = {"content": formData.content};
    alert("now the _buttonClick function in the posting component is being called");
    this._buttonClick();
  }

//  _patchEntry(formData){
//   alert('this is the data that will be patched in the Posting Data Variable: ' + formData.input)
//   this.httpService._patchRequest(this.url,formData.index,formData.input)
//  }

}
