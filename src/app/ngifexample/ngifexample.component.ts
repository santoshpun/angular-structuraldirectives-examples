import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifexample',
  templateUrl: './ngifexample.component.html',
  styleUrls: ['./ngifexample.component.css']
})
export class NgifexampleComponent implements OnInit {

  isVisible: boolean = true;

  user = {
    id: 1,
    name: 'John',
    country: 'USA'
  };

  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
