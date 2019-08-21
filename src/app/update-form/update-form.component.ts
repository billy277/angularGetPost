import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RdsData } from '../rdsData';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  state: Observable<RdsData[]>;
  rdsDataObj: RdsData;
  updatedRdsObj: RdsData;
  urlDatabaseLocal = "http://localhost:3000/data/";


  constructor(private router: Router, public activatedRoute: ActivatedRoute, private httpService: HttpService) { }
  

  onUpdateSubmit(){
    
    this.updatedRdsObj = this.rdsDataObj
    console.log("updatedrdsObj", this.updatedRdsObj);
    this.putRequest();
    this.router.navigateByUrl('/testing');
    
  }
  putRequest(){
    alert("about to make a put request with " + this.updatedRdsObj.id );
      let urlDatabaseLocal = this.urlDatabaseLocal + this.updatedRdsObj.id;
      this.httpService._putRequest(urlDatabaseLocal, this.updatedRdsObj ).subscribe(
        // data => console.log(data)
      );
      
      
  }
   
    
  backToHome(){

    this.router.navigateByUrl('/testing');
  }

  ngOnInit() {
    this.state = this.activatedRoute.params.pipe(()=>window.history.state);
    console.log("this is the state obj", this.state[0]);
    this.rdsDataObj =this.state[0]
    console.log("getting rdsData Obj", this.rdsDataObj);
  }

}
