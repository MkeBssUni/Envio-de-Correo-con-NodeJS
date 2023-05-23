const nodemailer = require('nodemailer');

let jConfig={
    "host": "smtp.gmail.com",
    "port": 587,
    "secure": false,
    "auth":{
        "type": "login",
        "user": "email",
        "pass": "pass"
    }
}

let email={
    from: "i20213tn095@utez.edu.mx",
    to: "20213tn140@utez.edu.mx",
    subject: "Besito, mi amor <3",
    html:` 
           <div> 
           <p>Hola amor</p> 
           <p>Esto es una prueba de envio de correos</p> 
           <p>Ando usando una librería que se llamada nodemailer, te amo</p> 
           </div> 
        `
}

let createTransport = nodemailer.createTransport(jConfig);

createTransport.sendMail(email, function(error, info){
    if(error){
       console.log("Error al enviar el correo: ",error);
    }else{
        console.log("Correo enviado exitosamente")
    }
    createTransport.close();
})