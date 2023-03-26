"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//Clase persona
var Persona = /** @class */ (function () {
    function Persona(a, b, c, d, e, f, g, h, i, j, k) {
        this._nombre = a;
        this._apellidos = b;
        this._edad = c;
        this._dni = d;
        this._cumple = e;
        this._colorFavorito = f,
            this._sexo = g;
        this._direcciones = h;
        this._mails = i;
        this._telefonos = j;
        this._notas = k;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        // persona
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellido", {
        // apellido
        get: function () {
            return this._apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        // edad
        get: function () {
            return this._edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        // dni
        get: function () {
            return this._dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumple", {
        // cumpleaños    
        get: function () {
            return this._cumple;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        // color favorito    
        get: function () {
            return this._colorFavorito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        // sexo    
        get: function () {
            return this._sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        // direcciones
        get: function () {
            return this._direcciones;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.sumarDirecciones = function (sumarDireccion) {
        this._direcciones.push(sumarDireccion);
    };
    Object.defineProperty(Persona.prototype, "mail", {
        // mails
        get: function () {
            return this._mails;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.sumarMails = function (sumarMail) {
        this._mails.push(sumarMail);
    };
    Object.defineProperty(Persona.prototype, "telefonos", {
        // telefonos
        get: function () {
            return this._telefonos;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.sumarTelefonos = function (sumarTelefono) {
        this._telefonos.push(sumarTelefono);
    };
    Object.defineProperty(Persona.prototype, "notas", {
        // notas    
        get: function () {
            return this._notas;
        },
        enumerable: false,
        configurable: true
    });
    // Función para mostrar por pantalla los datos y las dirreciones, telefonos y mail en cadena.
    Persona.prototype.enTexto = function () {
        var cadenaMails = "";
        for (var _i = 0, _a = this.mail; _i < _a.length; _i++) {
            var item = _a[_i];
            cadenaMails = cadenaMails + item.enTexto() + "; ";
        }
        var cadenaTelefonos = "";
        for (var _b = 0, _c = this.telefonos; _b < _c.length; _b++) {
            var item = _c[_b];
            cadenaTelefonos = cadenaTelefonos + item.enTexto() + "; ";
        }
        var cadenaDirecciones = "";
        for (var _d = 0, _e = this.direcciones; _d < _e.length; _d++) {
            var item = _e[_d];
            cadenaDirecciones = cadenaDirecciones + item.enTexto() + "; ";
        }
        return "Nombre: " + this.nombre + "\n" +
            "Apellido: " + this.apellido + "\n" +
            "Edad: " + this.edad + "\n" +
            "DNI: " + this.dni + "\n" +
            "Cumpleaños: " + this.cumple + "\n" +
            "Color favorito: " + this.colorFavorito + "\n" +
            "Sexo: " + this.sexo + "\n" +
            "Direcciones: " + cadenaDirecciones + "\n" +
            "Mails: " + cadenaMails + "\n" +
            "Telefonos: " + cadenaTelefonos + "\n" +
            "Notas: " + this.notas;
    };
    return Persona;
}());
exports.Persona = Persona;
