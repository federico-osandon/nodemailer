var express = require('express')
const nodemailer = require('nodemailer');
var app = express()

app.post('/send-mail', (req, res) =>{

    var transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email", 
            post: 587, 
            secure: false, 
            auth:{ 
                //"type":"login", 
                user:"nola.goldner62@ethereal.email", 
                pass:"JBrhyFXxdctNFhGQFm" 
            }      
    })

    var mailOption ={ 
        from:"Remitente",  //remitente
        to:"defe014@gmail.com",  //destinatario
        subject:"Nuevo mensaje de usuario",  //asunto del correo
        text:` 
            <div> 
            <p>Hola amigo</p> 
            <p>Esto es una prueba del vídeo</p> 
            <p>¿Cómo enviar correos eletrónicos con Nodemailer en NodeJS </p> 
            </div> 
        ` ,
    }

    transporter.sendMail(mailOption, (error, info) => { 
        if(error){ 
                res.status(500).send(error.message)  
        } else{ 
                console.log("Correo enviado correctamente")
                res.status(200).jsonp(req.body)
        } 
         
    });
        
})


app.listen(3000, ()=>{
    console.log('servidor en -> http://localhost:3000');
})


// let jConfig = {
//     "host":"tu-host", 
//     "port":"el-puerto", 
//     "secure":false, 
//     "auth":{ 
//         "type":"login", 
//         "user":"tu-correo@ewebik.com.mx", 
//         "pass":"tu-password" 
// }
// };

// let email ={ 
//     from:"@gmail.com",  //remitente
//     to:"defe014@gmail.com",  //destinatario
//     subject:"Nuevo mensaje de usuario",  //asunto del correo
//     html:` 
//         <div> 
//         <p>Hola amigo</p> 
//         <p>Esto es una prueba del vídeo</p> 
//         <p>¿Cómo enviar correos eletrónicos con Nodemailer en NodeJS </p> 
//         </div> 
//     ` 
// };


// //crea el transporte de el mail
// let createTransport = nodemailer.createTransport(jConfig);



// createTransport.sendMail(email, function (error, info) { 
//     if(error){ 
//          console.log("Error al enviar email"); 
//     } else{ 
//          console.log("Correo enviado correctamente"); 
//     } 
//     createTransport.close(); 
// });