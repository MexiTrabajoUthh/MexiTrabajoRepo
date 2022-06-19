import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //items del carousel
  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     }
  //   },
  //   nav: true
  // }
  //   slides = [
  //     {id: '1', img: "assets/imgs/trabajo1.png"},
  //     {id: '2', img: "assets/imgs/Trabajador1.png"},
  //     {id: '3', img: "assets/imgs/Vacante.png"},
  //   ];

  //   items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
  constructor() { }
  
  logo: string = "";
  nombre: string = "";
  
  ngOnInit(): void {
  }

  async getCliente(){
      this.logo = "logo_256.png";
      this.nombre = "prueba";
  }

}
