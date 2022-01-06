import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforexample',
  templateUrl: './ngforexample.component.html',
  styleUrls: ['./ngforexample.component.css']
})
export class NgforexampleComponent implements OnInit {
  heroes = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' }
  ];

  movies: any[] = [
    {
      "name": "Avengers: Endgame"
    },
    {
      "name": "Good Boys"
    },
    {
      "name": "Playmobil: The Movie"
    },
    {
      "name": "Aquarela"
    },
    {
      "name": "Aladdin"
    },
    {
      "name": "Downton Abbey"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
