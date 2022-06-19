import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/shared/services/identity.service';
import { UsuarioPortalService } from 'src/app/shared/services/usuarioportal.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logged = false;
  user: any;
  @Output() public sidenavToggle = new EventEmitter();
  constructor(
    private apiAuth: UsuarioPortalService,
    private identityService: IdentityService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getCliente();
    // detectar cambios en sesion
    this.identityService.notify().subscribe(async logged => {
      this.logged = logged;
      if (this.logged) {
        this.user = this.identityService.getData() || {};
      }
    });

  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  async getCliente() {
    // const cliente = await this.apiAuth.cliente();
    // if (cliente) {
    //   // this.title = cliente.titulo;
    //   // this.logo = cliente.logo;
    // }
  }

    /**
   * Cerrar la sesion del usuario
   */
     cerrarSesion() {
      this.identityService.logOff();
      this.router.navigate(['/']);
  
    }
    checked = false;
    indeterminate = false;
    labelPosition: 'before' | 'after' = 'after';
    disabled = false;
}
