import { Component, OnInit ,Input} from '@angular/core';
import { ServiceModel } from 'src/app/shared/models/servicios.models';
@Component({
  selector: 'app-vacantedetalle',
  templateUrl: './vacantedetalle.component.html',
  styleUrls: ['./vacantedetalle.component.css']
})
export class VacantedetalleComponent implements OnInit {
  @Input() dataVacante = new ServiceModel();
  constructor() { }

  ngOnInit(): void {
  }

}
