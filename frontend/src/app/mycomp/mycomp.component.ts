import { Component, OnInit } from '@angular/core';
import { TestapiService } from '../testapi.service';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css'],
  providers:[TestapiService]
})
export class MycompComponent implements OnInit {

  mydataarray: any[] = [];
 
  constructor(private datareceived: TestapiService) { }

  ngOnInit(): void {
    this.datareceived.getdatafromurl().subscribe((mydata)=>{
      console.log(mydata)
      return this.mydataarray = mydata
    })
  }

}
