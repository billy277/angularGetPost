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

  ngOnInit() {
  }


  _buttonClick(){
    console.log("inside button click for post");
    this.httpService._postRequest(this.postingData);
  }

  onClickSubmit(formData){
    alert('this is the data that will be stored in the Posting Data Variable: ' + formData.input)
    this.postingData = {"data": formData.input}

  }

}
