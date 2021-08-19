import { Component, OnInit } from '@angular/core';
import { TestapiService } from '../testapi.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css'],
  providers:[TestapiService]
})
export class MycompComponent implements OnInit {

  mydataarray: any[] = [];

  myLoginReForm = new FormGroup({
    username: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4)
      ]),
    email: new FormControl(''),
    groups: new FormControl([]),
  });
 
 
  constructor(private datareceived: TestapiService) { }

  ngOnInit(): void {
    this.datareceived.getdatafromurl().subscribe((mydata)=>{
      console.log(mydata)
      return this.mydataarray = mydata
    })
  }

  myRuSubmit() {
    console.log(this.myLoginReForm.value)
    this.datareceived.addUSer(this.myLoginReForm.value).subscribe((resp:any)=>{
      console.log(resp)
    })
    this.myLoginReForm.reset()
    
  }
 

}
