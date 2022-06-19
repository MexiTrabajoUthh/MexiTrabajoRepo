export class Chat{
    public intIdChat: number = 0;
    public intIdEmpleado: number = 0;
    public intIdUsuario:number = 0;
    public dtFecha: Date = new Date;
}

export class ChatMensajes{
    public intIdMensajeChat: number = 0;
    public intIdChat: number = 0;
    public varMensaje: string = "";
    public intIdTipoMensaje: number = 0;
    public dtFecha: Date = new Date;
}