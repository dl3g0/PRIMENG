import { Component } from '@angular/core';
export interface Car {
  vin;
  year;
  brand;
  color;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars= [
    {
      vin:'1',
      year:'2020',
      brand:'2',
      color:'negro'
    },
    {
      vin:'1',
      year:'2021',
      brand:'3',
      color:'blanco'
    }


  ];

    constructor() { }

    ngOnInit() {
        
    }
}
