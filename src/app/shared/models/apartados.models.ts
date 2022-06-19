export class ExperienciaLaboral {
    public intIdExpericienciaLaboral: number = 0;
    public intIdEmpleado: number = 0;
    public varCargo: string = '';
    public varLugar: string = '';
    public varDescripcion: string = '';
    public dtFechaIngreso: Date = new Date;
    public dtFechaFin?: Date = undefined;
    public btAunTrabajoAqui: boolean = false;
}

export class TrabajosAnteriores {
    public intIdTrabajoAnterior: number = 0;
    public intIdEmpleado: number = 0;
    public varLugar: string = '';
    public varDescripcion: string = '';
    public dtFechaIngreso?: Date = undefined;
    public dtFechaFin?: Date = undefined;
}

export class Estudios{

    public intIdEstudio: number = 0;
    public intIdEmpleado: number = 0;
    public intIdNivel: number = 0;
    public varInstitucion: string = '';
    public varTitulo: string = '';
    public intYearInicio: number = 0;
    public intYearFin: number = 0;
    public bitSigoEstudiando: boolean = false;
}