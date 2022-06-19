import { Component, Input, OnInit } from '@angular/core';
import { UsuarioDetalle } from 'src/app/shared/models/usuarios.model';
import { OutputService } from 'src/app/shared/services/output.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  @Input()  dataDetalle = new UsuarioDetalle();
  
  constructor(private output: OutputService,   
  ) { 

  }

  ngOnInit(): void {
    this.output.outputParams.emit(this.dataDetalle.intStatus);
    
    
  }
  
}

