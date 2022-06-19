import { Component, OnInit, ViewChild } from '@angular/core';
// import { IdentityService } from 'src/app/shared/services/identity.service';
import { Router } from '@angular/router';
// import { ApiMenuService } from 'src/app/api/api-menu.service';
import { MatSidenav } from '@angular/material/sidenav';
import { timer } from 'rxjs';
// import { AccesoService } from 'src/app/shared/services/accesos/acceso.service';
// import { ApiAuthService } from 'src/app/api/api-auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  // @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  logged = false;
  user: any;
  title: string = "";
  menu:any = [];


  isAdmin = false;
  logo: string = "logo_256.png";

  constructor(
    // private identityService: IdentityService,
    public router: Router,
    // private menuApi: ApiMenuService,
    // private accesoService: AccesoService,
    // private apiAuth: ApiAuthService
  ) { }

  ngOnInit() {

   
    // this.getCliente();
    // // detectar cambios en sesion
    // this.identityService.notify().subscribe(async logged => {
    //   this.logged = logged;

    //   if (this.logged) {
    //     this.user = this.identityService.getData() || {};
    //     const menu = await this.menuApi.getMenu();
      
    //     const accesos = this.accesoService.rutas;
    //     this.isAdmin =  this.accesoService.esAdmin;

    //     menu.forEach(x => {
    //       x.links = this.isAdmin ? x.links || [] : this.tieneSubLinks(accesos, x.links);
    //     });
        
    //     this.menu = menu.filter((x: any) => this.isAdmin || accesos.indexOf(x.url) !== -1 || x.links.length > 0);

    //     await timer(500).toPromise();

    //     this.sidenav.open();
    //   } else {
    //     if (this.sidenav){
    //       this.sidenav.close();
    //     }
       
    //   }
    // });

  }



  /**
   * Cerrar la sesion del usuario
   */
  cerrarSesion() {
    // this.identityService.logOff();
    // this.router.navigate(['/auth/login']);
   
  }


   /**
   * Ir a una pagina
   * 
   */
  async ir(link: any) {
    if (link.url){
      this.router.navigate([link.url]);
  
      
      if (window.screen.width < 700){
        // this.sidenav.close();
      }
      
    }
   
    link.active = !link.active;
  }


  /**
   * Valida y remueve los links a los que puede acceder
   * @param links 
   */
  private tieneSubLinks(rutasAccesos: string[], links: any[]): any[] {

    if (!links) return [];

    links = links.filter((x: any) => rutasAccesos.indexOf(x.url) !== -1);

    return links;
  }

  async getCliente(){
    // const cliente = await this.apiAuth.cliente();
    // if (cliente){
    //   this.title = cliente.titulo;
    //   this.logo = cliente.logo;
    // }
  }

  toggle(){
    // this.sidenav.toggle();
    // localStorage.setItem('sidebar', this.sidenav.opened.toString());
  }
}
