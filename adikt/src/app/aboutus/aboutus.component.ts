import { Component, OnInit } from '@angular/core';

export interface Employee{
  id: string;
  name: string;
  email: string;
  password : string;
}

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
   constructor() {}
  ngOnInit(){}

  show()
  {
    alert('Hello World');
    console.log('Hello World');
  }

  show1()
  {
    alert('Hello World!!');
    console.log('Hello World!!')
  }
}
