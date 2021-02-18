import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cof-detail',
  templateUrl: './cof-detail.component.html',
  styleUrls: ['./cof-detail.component.css']
})
export class CofDetailComponent implements OnInit {
  
  @Input() data;
  

  constructor() { }

  ngOnInit(): void {
  }

}
