import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export class Validations {

    static NombreApellidos(control: AbstractControl): ValidationErrors| null{
        let value = control.value.lenght;
        if (value.lenght <= 70){
            return null;
        }
        else{
            return {value: true}
        }

    }
    static RazonSocial(){

    }
    static Curp(){

    }
    static CP(){

    }
}
