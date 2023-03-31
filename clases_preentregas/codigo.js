//variables

let ingresoNombre = prompt("Hola! ingresa tu nombre para comenzar");
//let ingresaMail = prompt ("Ingresa tu mail para recibir información y comenzamos")

alert("Bienvenido/a" + " " + ingresoNombre);
alert( "Somos de THE KETO LAB y a continuación detallaremos los próximos talleres/labs a los que podrás inscribirte… \n1-LAB DE PANES Y PIZZAS \n2-LAB DE REPOSTERIA \n3-LAB DE NUTRICION");

let labPanesPizzas = 1250; 
let labReposteria = 1300;
let labNutricion = 2000;


let nombre = prompt("Ingresa nuevamente tu nombre");
let edad = prompt ("Ingresa tu edad");
let telefono = prompt ("Ingresa tu telefono/celular");
let email = prompt ("Ingresa tu email")

function Persona (nombre, edad, telefono, email){
        this. nombre = nombre;
        this. edad = edad;
        this. telefono = telefono;
        this. email = email;
}



let labs = prompt("Muy bien, ahora elige cualquiera de nuestros LABS disponiles: \n1-LAB DE PANES Y PIZZAS \n2-LAB DE REPOSTERIA \n3-LAB DE NUTRICION \nPresiona x para finalizar.");

function talleres () {
        while (labs != "x") {
                if (labs == "1") {                
                        alert("Te has inscripto al LAB de Panes y Pizzas, con un costo de $" + labPanesPizzas);
                } else if (labs =="2") {                        
                        alert("Te has inscripto al LAB de Reposteria, con un costo de $" + labReposteria);
                } else if (labs == "3") {                        
                        alert("Te has inscripto al LAB de Nutrición, con un costo de $" + labNutricion);                         
                } else {
                        alert("Ese lab no se encuentra");
                } 
                  labs = prompt ("Ingrese otro LABS si desea o escriba x para terminar")
        }
        alert("Buenísimo" + " " + ingresoNombre + " " + "recibiras por mail todos los datos si te anotaste a alguno de nuestros LABS!!!")
}

talleres (); 

const persona = new Persona(nombre, edad, telefono, email);
console.log (persona);
console.log (persona.nombre);


//array
const labPanesPizzasIncluido = ["Pan de Hamburguesa", "Pancitos de queso", "Pan de Molde", "Pizza con masa de muzzarella", "Masa de pizza low carb"];

const labReposteriaIncluido  = ["Biscochuelo/Pionono", "Muffins", "Frosting", "Coquitos", "Postre de chocolate sanito"];

const labNutricionIncluido = ["Plan Mensual", "Plan Dual", "Plan Online"];

for (let i = 0; i < labPanesPizzasIncluido.length; i++) {
       console.log (labPanesPizzasIncluido [i]);
}

for (let i = 0; i < labReposteriaIncluido.length; i++) {
        console.log (labReposteriaIncluido [i]);
 }

 for (let i = 0; i < labNutricionIncluido.length; i++) {
        console.log (labNutricionIncluido [i]);
 }