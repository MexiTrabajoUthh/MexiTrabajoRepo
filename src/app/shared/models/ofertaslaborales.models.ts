export class OfertasLaborales {
    public intIdOfertaLaboral: number = 0;
    public intIdEmplesa: number = 0;
    public varPuesto: string = '';
    public varDescripcion: string = '';
    public varUbicacion: string = '';
    public decSalario: number = 0;
    public intEstatus: number = 1;
    public dtFechaRegistro: Date = new Date;
    public intTurno: number = 0;
    public varRequisitos: string ='';
    public dtFechaVigencia: Date = new Date;
    public IntTipoTrabajo: number = 0;
}
export class OfertasLaboralesResult extends OfertasLaborales {
    public empresa: string = '';
    public mostrar: boolean = false;
}