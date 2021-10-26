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
   // verifico che l'email sia presente nella lista
   document.getElementById("risposta").innerHTML =
   "L'email " + mailUtente + " è valida";
   document.getElementById("textgame").innerHTML =
   "Puoi finalmente giocare a dadi! Buona fortuna!";

   // numero utente
   let sceltaDadoUtente = Math.floor(Math.random()*6+1);
   console.log(sceltaDadoUtente);
   document.getElementById("numeroutente").innerHTML = 
   "Il tuo numero è: " + sceltaDadoUtente;

   // numero pc
   let sceltaDadoPc = Math.floor(Math.random()*6+1);
   console.log(sceltaDadoPc);
   document.getElementById("numeropc").innerHTML = 
   "Il numero del computer è: " + sceltaDadoPc;

   // vince l'utente
   if (sceltaDadoUtente > sceltaDadoPc) {
      document.getElementById("vincitore").innerHTML = 
      "Complimenti, hai vinto! Il tuo " + sceltaDadoUtente + " ha battuto il " + sceltaDadoPc + " del computer.";
   }
   
   // vince il computer
   else if(sceltaDadoUtente < sceltaDadoPc) {
      document.getElementById("vincitore").innerHTML = 
      "Peccato, hai perso! Il computer con il suo " + sceltaDadoPc + " ha battuto il tuo " + sceltaDadoPc + ". Ritenta sarai più fortunato.";
   };
   
}

else {
   // l'email non c'è nella lista, non può giocare!
   document.getElementById("risposta").innerHTML =
   mailUtente + " NON è valida";

   document.getElementById("numeroutente").innerHTML = 
   "Non puoi giocare a dadi se l'Email non è valida!";

   document.getElementById("numeropc").innerHTML = 
   "Nemmeno il computer ha voglia di giocare se non inserisci un Email valida...";
};

