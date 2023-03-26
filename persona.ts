// Importanciones
import {Mail} from "./mail";
import {Direccion} from "./direccion";
import {Telefono} from "./telefono";

//Clase persona

export class Persona {
    /* a */ private _nombre: string;
    /* b */ private _apellidos: string;
    /* c */ private _edad: number;
    /* d */ private _dni: string;
    /* e */ private _cumple: string;
    /* f */ private _colorFavorito: string;
    /* g */ private _sexo: string;
    /* h */ private _direcciones: Direccion[];
    /* i */ private _mails: Mail[];
    /* j */ private _telefonos: Telefono[];
    /* k */ private _notas: string;
    constructor (a: string, b:string, c:number, d:string, e:string, f:string, g:string, h:Direccion[], i:Mail[], j:Telefono[], k:string ){
        this._nombre = a;
        this._apellidos = b;
        this._edad = c;
        this._dni = d;
        this._cumple = e;
        this._colorFavorito = f,
        this._sexo = g;
        this._direcciones = h;
        this._mails = i;
        this._telefonos= j;
        this._notas = k;
    }
// persona
    public get nombre(): string {
        return this._nombre;
    }

// apellido
    public get apellido(): string {
        return this._apellidos;
    }

// edad
    public get edad(): number {
        return this._edad;
    }        

// dni
    public get dni(): string {
        return this._dni;
    }

// cumpleaños    
    public get cumple(): string {
        return this._cumple;
    }

// color favorito    
    public get colorFavorito(): string {
        return this._colorFavorito;
    }
 
// sexo    
    public get sexo(): string {
        return this._sexo;
    }

// direcciones
    public get direcciones(): Direccion[] {
        return this._direcciones;
    }

    public sumarDirecciones(sumarDireccion: Direccion) {
        this._direcciones.push(sumarDireccion);
    }

// mails
    public get mail(): Mail[] {
        return this._mails;
    } 

    public sumarMails(sumarMail: Mail) {
        this._mails.push(sumarMail);
    }

// telefonos
    public get telefonos(): Telefono[] {
        return this._telefonos;
    }

    public sumarTelefonos(sumarTelefono: Telefono) {
        this._telefonos.push(sumarTelefono);
    }

// notas    
    public get notas(): string {
        return this._notas;
    }
 
// Función para mostrar por pantalla los datos y las dirreciones, telefonos y mail en cadena.


    public enTexto(): string {
        var cadenaMails = "";
        for (const item of this.mail) {
            cadenaMails=cadenaMails+item.enTexto()+"; ";
        }

        var cadenaTelefonos = "";
        for (const item of this.telefonos) {
            cadenaTelefonos=cadenaTelefonos+item.enTexto()+"; ";
        }

        var cadenaDirecciones = "";
        for (const item of this.direcciones) {
            cadenaDirecciones=cadenaDirecciones+item.enTexto()+"; ";
        }
        
        return "Nombre: "+ this.nombre + "\n" + 
                "Apellido: "+ this.apellido+ "\n" + 
                "Edad: " + this.edad + "\n" + 
                "DNI: " + this.dni + "\n" + 
                "Cumpleaños: " + this.cumple + "\n" + 
                "Color favorito: " + this.colorFavorito + "\n" + 
                "Sexo: " + this.sexo + "\n" +
                "Direcciones: " + cadenaDirecciones + "\n" +
                "Mails: " + cadenaMails + "\n" +
                "Telefonos: " + cadenaTelefonos + "\n" +
                "Notas: " + this.notas
    }        
}



