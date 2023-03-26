"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importancion de clases
var persona_1 = require("./persona");
var mail_1 = require("./mail");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
//Funcion agenda
function mostrarAgenda(agenda) {
    for (var _i = 0, agenda_2 = agenda; _i < agenda_2.length; _i++) {
        var item = agenda_2[_i];
        console.log(item.enTexto());
        console.log("\n");
    }
}
// Personas de la agenda
var casaPepe = new direccion_1.Direccion("Rio", 2, 2, "A", 50003, "Zaragoza", "España");
var emailPepe = new mail_1.Mail("personal", "paco@paco.com");
var telefonoPepe = new telefono_1.Telefono("personal", 987656565);
var pepe = new persona_1.Persona("Pepe", "Martinez", 14, "78123455T", "9 de Agosto", "Rojo", "Hombre", [casaPepe], [emailPepe], [telefonoPepe], "Nada que objetar");
var casaMaria = new direccion_1.Direccion("Avenida diagonal", 13, 2, "C", 50012, "Zaragoza", "España");
var emailMaria = new mail_1.Mail("personal", "maria@maria.com");
var telefonoMaria = new telefono_1.Telefono("personal", 659876565);
var maria = new persona_1.Persona("María", "García", 40, "45578123V", "23 de Septiembre", "Azul", "Mujer", [casaMaria], [emailMaria], [telefonoMaria], "Mi flor favorita es la margarita");
var casaBerta = new direccion_1.Direccion("Calle Mago", 5, 3, "D", 50002, "Zaragoza", "España");
var emailBerta = new mail_1.Mail("personal", "berta@berta.com");
var telefonoBerta = new telefono_1.Telefono("personal", 987656000);
var berta = new persona_1.Persona("Berta", "Perez", 22, "12378123V", "3 de Junio", "Morado", "Mujer", [casaBerta], [emailBerta], [telefonoBerta], "Vacío");
// Mostrar la agenda
var agenda = [pepe, maria, berta];
mostrarAgenda(agenda);
// Nuevos datos de la agenda
var casaNuevo = new direccion_1.Direccion("Calle Pajaro", 1, 2, "A", 50001, "Madrid", "España");
var emailNuevo = new mail_1.Mail("trabajo", "nuevo@trabajo.com");
var telefonoNuevo = new telefono_1.Telefono("trabajo", 600000001);
//DNI a buscar
var dniBuscar = "45578123V";
// For para añadir datos
for (var _i = 0, agenda_1 = agenda; _i < agenda_1.length; _i++) {
    var item = agenda_1[_i];
    if (item.dni == dniBuscar) {
        item.sumarDirecciones(casaNuevo);
        item.sumarMails(emailNuevo);
        item.sumarTelefonos(telefonoNuevo);
    }
}
// Mostar la nueva agenda
console.log("Nueva agenda:");
console.log("\n");
mostrarAgenda(agenda);
