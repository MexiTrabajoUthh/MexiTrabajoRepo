export class Empleo {
    public intIdEmpleo: number = 0;
    public intIdEmpresa: number = 0;
    public varDescripcion: string = '';
    public decSalario: number = 0;
    public intEstatus: number = 0;
}

export class EmpleoResult  extends Empleo{
    public varEmpresa: string = '';
    public varDireccion: string = '';
}

export class FiltroEmpleos{
    public empleo:string = '';
    public direccion: string = '';
}