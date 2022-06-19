export class Buzon{
    public intIdBuzon: number = 0;
    public intIdUsuario: number = 0;
    public intIdEmpleado: number = 0;
    public dtFechaBuzon: Date = new Date;
}

export class BuzonMensaje{
    public intIdBuzonMensaje: number = 0;
    public intIdBuzon: number = 0;
    public intTipoMensaje: number = 0;
    public varMensaje: string = "";
    public intEstatus: number = 1;
    public dtFechaMensaje: Date = new Date;
}

export class BuzonResult{
    public intIdBuzon: number = 0;
    public intIdUsuario: number = 0;
    public administrador: string= "";
    public intIdEmpleado: number = 0;
    public empleado: string = "";
    public dtFechaMenaje: Date = new Date;
}