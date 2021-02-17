import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cof-detail',
  templateUrl: './cof-detail.component.html',
  styleUrls: ['./cof-detail.component.css']
})
export class CofDetailComponent implements OnInit {
  
  CoFDetail=[
    {Name:"Tracey Parkins", Joined:"16 Jun 21", Circle:"01"},
    {Name:"Rissi Taylor", Joined:"18 Jun 21", Circle:"03"}
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
