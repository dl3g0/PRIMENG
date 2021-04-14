import { Component, ViewChild } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dropdownIcon = 'pi pi-chevron-down';

    cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];

    cities2 = [
      {label: 'New York', value: 'YN'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
    ];

    seleccion_1 = null;
    seleccion_2 = '';
  cars= [
    {
      vin:'1',
      year:'2020',
      brand:'2',
      color:'negro',
      url_img:'',
      estado: true
    },
    {
      vin:'2',
      year:'2021',
      brand:'3',
      color:'blanco',
      url_img:'',
      estado: false
    }
  ];

  selectedCar = null;

    constructor() { }

    ngOnInit() {
        
    }

    obtenerListado(){
      this.dropdownIcon = 'pi pi-spin pi-spinner';
      setTimeout(() => {
        this.dropdownIcon = 'pi pi-chevron-down';
      }, 2000);
    }

    showInfo(){
      console.log(this.seleccion_1, this.seleccion_2)
    }

    get select_fisrt(){
      return this.seleccion_1 ? this.seleccion_1['name'] : 'SELECCIONAR'
    }

    select_2(){
      return this.seleccion_1 ? this.seleccion_1['name'] : 'SELECCIONAR'
    }

    showInfoList(){
      console.log(this.cars, this.selectedCar)
    }

    obtenerInfo(data){
      console.log(data)
    }

    changeActive(data){
      console.log(data)
    }
}
