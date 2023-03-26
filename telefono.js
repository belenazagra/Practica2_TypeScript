"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(a, b) {
        this._tipo = a;
        this._numero = b;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Telefono.prototype.enTexto = function () {
        return this.tipo + " " + this.numero;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
