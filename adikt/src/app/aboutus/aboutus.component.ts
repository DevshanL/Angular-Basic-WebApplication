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

  employees: Employee[] =[
{id: '1', name:'Devshan', email: 'devshan@gmail.com', password: '123'},
{id: '2', name:'Sithira', email: 'sithira@gmail.com', password: '123'},
{id: '1', name:'Mewan', email: 'mewan@gmail.com', password: '123'}
  ] ;    

   constructor() {}
  ngOnInit(){}

  
  
}
