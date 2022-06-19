export class ServiceModel{
    public intIdServicio: number = 0;
    public intIdUser: number = 0;
    public varNombreTrabahjo: string ='';
    public varDescripcion: string = '';
    public varHabilidades: string ='';
    public varHorario: string ='';
    public decSalario: number = 0;
    public intStatus: number = 1;
    public intTipoTrabajo: number = 1;
    
}
export class ServiceResult extends ServiceModel {
    public varNombre: string = '';
    public varAPatern: string = '';
    public varAMatern: string = ''
    public mostrar: boolean = false;
}