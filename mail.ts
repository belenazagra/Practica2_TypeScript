export class Mail {
    private _tipo: string;
    private _direccion: string;
    constructor (a: string, b: string){
        this._tipo = a;
        this._direccion = b;
    }

    public get tipo(): string {
        return this._tipo;
        }

    public get direccion(): string {
        return this._direccion;
        }
        
    public enTexto(): string {
        return this.tipo + " " + this.direccion
    }    
}