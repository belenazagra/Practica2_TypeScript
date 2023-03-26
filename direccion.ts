export class Direccion {
    /*a*/ private _calle: string;
    /*b*/ private _numero: number;
    /*c*/ private _piso: number;
    /*d*/ private _letra: string;
    /*e*/ private _codigoPostal: number;
    /*f*/ private _poblacion: string;
    /*g*/ private _provincia: string;
    constructor (a: string, b:number, c:number, d:string, e:number, f:string, g:string){
        this._calle = a;
        this._numero = b;
        this._piso = c;
        this._letra = d;
        this._codigoPostal = e;
        this._poblacion = f;
        this._provincia = g;
    }
    public get calle(): string {
        return this._calle;
        }

    public get numero(): number {
        return this._numero;
        }

    public get piso(): number {
        return this._piso;
        }
     
    public get letra(): string {
        return this._letra;
        }

    public get codigoPostal(): number {
        return this._codigoPostal;
        }

    public get poblacion(): string {
        return this._poblacion;
        }

    public get provincia(): string {
        return this._provincia;
        }
        
    public enTexto(): string {
        return this.calle + " " + this.numero + " " + this.piso + " " + this.letra + " " + this.codigoPostal + " " + this.poblacion + " " + this.provincia
    }
}