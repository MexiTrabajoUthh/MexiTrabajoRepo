import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from'@angular/forms';


interface Food {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-select-tipotrabajo',
  templateUrl: './select-tipotrabajo.component.html',
  styleUrls: ['./select-tipotrabajo.component.css'],
  providers:[
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectTipotrabajoComponent),
    multi: true

    }
  ]
})
export class SelectTipotrabajoComponent  implements OnInit, ControlValueAccessor{
  option = 0;
  private onChangefn!: Function ;

  foods: Food[] = [
    {value: 0, viewValue: 'Steak'},
    {value: 1, viewValue: 'Pizza'},
    {value: 2, viewValue: 'Tacos'},
  ];
  
  ngOnInit(): void {
    
  }
  OptionSelect($event : any): void {
    this.onChangefn($event.target.value);
  }
  writeValue(value: number): void {
    this.option = value;
  }
  registerOnChange(fn: any): void {
    this.onChangefn =fn;
  }
  registerOnTouched(fn: any): void { 
  }

}
  