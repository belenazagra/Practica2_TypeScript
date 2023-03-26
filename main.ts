// Importancion de clases
import {Persona} from "./persona";
import {Mail} from "./mail";
import {Direccion} from "./direccion";
import {Telefono} from "./telefono";

//Funcion agenda
function mostrarAgenda(agenda: Persona[]){
    for (const item of agenda) {
        console.log(item.enTexto());
        console.log("\n");
    }
}

// Personas de la agenda
var casaPepe = new Direccion("Rio",2,2,"A",50003,"Zaragoza","España");
var emailPepe = new Mail("personal","paco@paco.com")
var telefonoPepe = new Telefono("personal",987656565)
var pepe = new Persona("Pepe","Martinez",14, "78123455T", "9 de Agosto", "Rojo", "Hombre", [casaPepe], [emailPepe], [telefonoPepe],"Nada que objetar");

var casaMaria = new Direccion("Avenida diagonal",13,2,"C",50012,"Zaragoza","España");
var emailMaria = new Mail("personal","maria@maria.com")
var telefonoMaria = new Telefono("personal",659876565)
var maria = new Persona("María","García",40, "45578123V", "23 de Septiembre", "Azul", "Mujer", [casaMaria], [emailMaria], [telefonoMaria],"Mi flor favorita es la margarita");

var casaBerta = new Direccion("Calle Mago",5,3,"D",50002,"Zaragoza","España");
var emailBerta = new Mail("personal","berta@berta.com")
var telefonoBerta = new Telefono("personal",987656000)
var berta = new Persona("Berta","Perez",22, "12378123V", "3 de Junio", "Morado", "Mujer", [casaBerta], [emailBerta], [telefonoBerta],"Vacío");


// Mostrar la agenda
var agenda= [pepe, maria, berta]
mostrarAgenda(agenda)


// Nuevos datos de la agenda
var casaNuevo = new Direccion("Calle Pajaro",1,2,"A",50001,"Madrid","España");
var emailNuevo = new Mail("trabajo","nuevo@trabajo.com")
var telefonoNuevo = new Telefono("trabajo",600000001)

//DNI a buscar
var dniBuscar= "45578123V"

// For para añadir datos
for (const item of agenda) {
    if (item.dni == dniBuscar){
        item.sumarDirecciones(casaNuevo)
        item.sumarMails(emailNuevo)
        item.sumarTelefonos(telefonoNuevo)
    } 
}

// Mostar la nueva agenda
console.log("Nueva agenda:");
console.log("\n");
mostrarAgenda(agenda)
