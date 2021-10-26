// esercizio controllo mail

// elenco mail classe44
const mailClasse = ['Anthony@gmail.com',
'Andrea B@gmail.com',
'Federico@gmail.com',
'Cristia@gmail.com',
'Davide@gmail.com',
'Alberto@gmail.com',
'Mauro@gmail.com',
'MatteoD@gmail.com',
'Michele@gmail.com',
'MatteoF@gmail.com',
'AndreaF@gmail.com',
'Simone@gmail.com',
'MattiaG@gmail.com',
'Larisa@gmail.com',
'Manuel@gmail.com',
'MatteoL@gmail.com',
'Francesco@gmail.com',
'Morena@gmail.com',
'MattiaM@gmail.com',
'Simone@gmail.com',
'Mariano@gmail.com',
'Vitali@gmail.com',
'Gianluca@gmail.com',
'Giuseppe@gmail.com',
'Salvatore@gmail.com',
'Giada@gmail.com',
'GiuliaSa@gmail.com',
'BenjaminS@gmail.com',
'GiuliaSo@gmail.com',
'LucaS@gmail.com',
'Davide@gmail.com',
'Luigi@gmail.com',
'LuvaV@gmail.com'];

let mailUtente = prompt("Inserire un Email per giocare a dadi");

if (mailClasse.includes(mailUtente)) {
   document.getElementById("risposta").innerHTML =
   mailUtente + " è valida";

   let sceltaDado = Math.floor(Math.random());
   console.log(sceltaDado);
 }

else {
   document.getElementById("risposta").innerHTML =
   mailUtente + " NON è valida";
}