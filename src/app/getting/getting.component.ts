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
      
  }

  _buttonClick(){
    return this.httpService._getRequest().subscribe((data)=>{
      this.getData = data;
      console.log(this.getData);
    });  
  }
}
