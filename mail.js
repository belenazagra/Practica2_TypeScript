"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(a, b) {
        this._tipo = a;
        this._direccion = b;
    }
    Object.defineProperty(Mail.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        enumerable: false,
        configurable: true
    });
    Mail.prototype.enTexto = function () {
        return this.tipo + " " + this.direccion;
    };
    return Mail;
}());
exports.Mail = Mail;
