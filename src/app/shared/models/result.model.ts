export class Result<T> {
    constructor(
        public data: T,
        public result: boolean,
        public message: string
    ) { }
}


export class ResultPaginado<T> {
    public results: T[] = [];
    public total: number = 0;
}


export class ResultImport{
    public total: number = 0;
    public errores: number = 0;
    public mensaje: string = '';
    public mjsErrores: string[] = [];
}