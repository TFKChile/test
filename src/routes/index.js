const express = require("express");
const nodemailer = require("nodemailer");
const {google} = require("googleapis")
const router = express.Router();

router.post('/send-email-a',(req,res)=>{
    const {mail}=req.body
    const correo = `${mail}`;
    const CorreoRespaldo = `
    <ul>
    <li>gmail: ${mail}</li>
    </ul>
    `;
    const TextoRespuesta = ` <h3 style="color: #2e2d2d; font-family: 'Roboto';">
    Hola <br>
    Gracias por realizar este Test de Estilo Masculino. <br>
    Aquí te dejo el resultado completo y de regalo algunas ideas para usar en el día a día. <br> <br>

    Tu estilo es NATURAL y………. <br> <br>

    Tu apariencia: Accesible, saludable, amigable, sencillo, juvenil e informal. <br>
    Mensaje: Alegría, optimismo, amabilidad, energía y entusiasmo. <br>
    Fortalezas: Atrae amigos y diversión. Personalidad abierta y abordable. Reduce el estrés y simplifica <br>
    el vestuario. <br>
    ¿Qué busca?: Comodidad <br>
    Le gusta la ropa cómoda y funcional (los jeans, polos,T-shirts y sudaderas le encantan), <br>
    de líneas sueltas y relajadas, poco estructurada. Los materiales de fácil cuidado y en colores neutros, <br>
    básicos y ecológicos. Accesorios pequeños, sencillos y solo si cumplen una función. Puede en ocasiones lucir <br>
    desprolijo y descuidado. <br>
    En el adjunto te dejo algunas ideas para el día a día. <br><br>

    Saludos Karinna

    </h3>`; 
    

    const CLIENT_ID = "1098980030856-peiurfpbd8rllfghid4bis9gc2qhungt.apps.googleusercontent.com";
    const CLIENT_SECRET="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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//04lyhcopHgxZOCgYIARAAGAQSNwF-L9Ir3xJggH5e5appqVCFB826WJW8_042BXxWlr1oTK37VbfTqMBy8uFtnImrctKBNliDX3A";
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);

    oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

   async function sendMail(){

    try{
        const TokenAcceso =await oAuth2Client.getAccessToken();
        const transport =  nodemailer.createTransport({
            service: "gmail",
            auth:{
                type:"OAuth2",
                user:  "prueba.envio.email.nodejs@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: "TokenAcceso"
            },
        });
        
            const MailCliente = {
                from: "Test de estilo <prueba.envio.email.nodejs@gmail>",
                to: correo , //hacia donde va dirigido el correo
                subject: "Respuesta test de estilo",
                html: TextoRespuesta,
                attachments:[{
                    filename:'Estilo Natural.pdf',
                    path:'./src/pdf/Estilo Natural.pdf'
                }],
            };  
            const MailRespaldo= {
                from: "Posible Cliente <prueba.envio.email.nodejs@gmail>",
                to: "jose.c.escobar.v@gmail.com" , //hacia donde va dirigido el correo
                subject: "Cliente potencial ",
                html: CorreoRespaldo,
            };
            const result = await transport.sendMail(MailCliente)
            const result2 = await transport.sendMail(MailRespaldo)
            return result,result2;
    }
    catch(err){
        console.log(err);
    }
    }
    sendMail()
    .then((result)=>res.status(200).send("enviado"))
    .catch((error)=> console.log("error"));
   
});
router.post('/send-email-b',(req,res)=>{
    const {mail}=req.body
    const correo = `${mail}`;
    const CorreoRespaldo = `
    <ul>
    <li>gmail: ${mail}</li>
    </ul>
    `;
    const TextoRespuesta = `<h3 style="color: #2e2d2d; font-family: 'Roboto';">
    Hola <br>
    Gracias por realizar este Test de Estilo Masculino. <br>
    Aquí te dejo el resultado completo y de regalo algunas ideas para usar en el día a día. <br> <br>
        
    Tu estilo es TRADICIONAL y……. <br> <br>
        
    Tu apariencia: Conservador, serio, discreto y moderado. <br>
    Mensaje: Responsabilidad, confianza, organización, eficiencia, constancia, honestidad, lealtad y fidelidad. <br> 
    Fortalezas: Genera respeto y credibilidad, se ve más maduro y con conocimientos; ahorra dinero pues produce <br>
    pocos cambios en su guardarropa. <br> <br>
    ¿Qué busca?: Sobriedad <br> <br>
        
    Le gusta la ropa sencilla y clásica (los pantalones de algodón y las camisas le encantan), <br> 
    con pocos detalles y nada que llame la atención, en colores neutros y sobrios. <br>
    No se deja llevar por las estridencias de la moda. Le cuesta cambiar, por lo que usa el mismo corte de pelo toda la vida; <br>
    generalmente lo prefiere corto, de raya al lado y controlado. Por lo anterior puede parecer aburrido. <br> <br>
        
    En el adjunto te dejo algunas ideas para el día a día. <br><br>
        
    Saludos Karinna
    </h3>`; 
    

    const CLIENT_ID = "1098980030856-peiurfpbd8rllfghid4bis9gc2qhungt.apps.googleusercontent.com";
    const CLIENT_SECRET="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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//04lyhcopHgxZOCgYIARAAGAQSNwF-L9Ir3xJggH5e5appqVCFB826WJW8_042BXxWlr1oTK37VbfTqMBy8uFtnImrctKBNliDX3A";
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);

    oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

   async function sendMail(){

    try{
        const TokenAcceso =await oAuth2Client.getAccessToken();
        const transport =  nodemailer.createTransport({
            service: "gmail",
            auth:{
                type:"OAuth2",
                user:  "prueba.envio.email.nodejs@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: "TokenAcceso"
            },
        });
        
            const MailCliente = {
                from: "Test de estilo <prueba.envio.email.nodejs@gmail>",
                to: correo , //hacia donde va dirigido el correo
                subject: "Respuesta test de estilo",
                html: TextoRespuesta,
                attachments:[{
                    filename:'Estilo Tradicional.pdf',
                    path:'./src/pdf/Estilo Tradicional.pdf'
                }],
            };  
            const MailRespaldo= {
                from: "Posible Cliente <prueba.envio.email.nodejs@gmail>",
                to: "jose.c.escobar.v@gmail.com" , //hacia donde va dirigido el correo
                subject: "Cliente potencial ",
                html: CorreoRespaldo,
            };
            const result = await transport.sendMail(MailCliente)
            const result2 = await transport.sendMail(MailRespaldo)
            return result,result2;
    }
    catch(err){
        console.log(err);
    }
    }
    sendMail()
    .then((result)=>res.status(200).send("enviado"))
    .catch((error)=> console.log("error"));
   
});
router.post('/send-email-c',(req,res)=>{
    const {mail}=req.body
    const correo = `${mail}`;
    const CorreoRespaldo = `
    <ul>
    <li>gmail: ${mail}</li>
    </ul>
    `;
    const TextoRespuesta = `<h3 style="color: #2e2d2d; font-family: 'Roboto';">
    Hola <br> 
    Gracias por realizar este Test de Estilo Masculino. <br>
    Aquí te dejo el resultado completo y de regalo algunas ideas para usar en el día a día. <br> <br>
    
    Tu estilo es ELEGANTE y……. <br> <br>
    
    Tu apariencia: Refinado y distinguido. Formal y de alto estatus. <br> 
    Mensaje: De éxito y seguridad en sí mismo. Serenidad y   <br>
    reserva, cultura y clase. <br>
    Fortalezas: Prestigio y distinción, provoca admiración y  <br> 
    deseo de ser imitado. Genera confianza y eleva su posición  <br>
    social. Aunque parezca mentira ahorra dinero, pues al utilizar prendas de alta calidad le duran más tiempo. <br> <br>
    ¿Qué busca?: Calidad <br> <br>
    Siempre viste adecuadamente para cada ocasión, cuida meticulosamente su aspecto y se ve impecable de pies a cabeza. <br> 
    Al comprar prefiere calidad que cantidad y es muy exigente con su  <br> 
    ropa. Le gusta que le quede perfecta, con detalles de distinción en colores discretos y en telas de alta calidad. <br> 
    Le gustan los accesorios de calidad y marca. Sus zapatos italianos están perfectamente lustrados y cuidados. No deja ningún detalle el azar. <br>
      
    En el adjunto te dejo algunas ideas para el día a día. <br> <br>
    
    Saludos Karinna
    </h3>`; 
    

    const CLIENT_ID = "1098980030856-peiurfpbd8rllfghid4bis9gc2qhungt.apps.googleusercontent.com";
    const CLIENT_SECRET="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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//04lyhcopHgxZOCgYIARAAGAQSNwF-L9Ir3xJggH5e5appqVCFB826WJW8_042BXxWlr1oTK37VbfTqMBy8uFtnImrctKBNliDX3A";
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);

    oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

   async function sendMail(){

    try{
        const TokenAcceso =await oAuth2Client.getAccessToken();
        const transport =  nodemailer.createTransport({
            service: "gmail",
            auth:{
                type:"OAuth2",
                user:  "prueba.envio.email.nodejs@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: "TokenAcceso"
            },
        });
        
            const MailCliente = {
                from: "Test de estilo <prueba.envio.email.nodejs@gmail>",
                to: correo , //hacia donde va dirigido el correo
                subject: "Respuesta test de estilo",
                html: TextoRespuesta,
                attachments:[{
                    filename:'Estilo Elegante.pdf',
                    path:'./src/pdf/Estilo Elegante.pdf'
                }],
            };  
            const MailRespaldo= {
                from: "Posible Cliente <prueba.envio.email.nodejs@gmail>",
                to: "jose.c.escobar.v@gmail.com" , //hacia donde va dirigido el correo
                subject: "Cliente potencial ",
                html: CorreoRespaldo,
            };
            const result = await transport.sendMail(MailCliente)
            const result2 = await transport.sendMail(MailRespaldo)
            return result,result2;
    }
    catch(err){
        console.log(err);
    }
    }
    sendMail()
    .then((result)=>res.status(200).send("enviado"))
    .catch((error)=> console.log("error"));
   
});
router.post('/send-email-d',(req,res)=>{
    const {mail}=req.body
    const correo = `${mail}`;
    const CorreoRespaldo = `
    <ul>
    <li>gmail: ${mail}</li>
    </ul>
    `;
    const TextoRespuesta = `<h3 style="color: #2e2d2d; font-family: 'Roboto';">
    Hola <br>
    Gracias por realizar este Test de Estilo Masculino. <br>
    Aquí te dejo el resultado completo y de regalo algunas ideas para usar en el día a día. <br> <br>
    
    Tu estilo es ROMANTICO y………. <br> <br>
    
    Tu apariencia: Cercano, cálido, tranquilo y bondadoso. <br> 
    Mensaje: De gentileza, encanto, comprensión, consideración por los demás, calma y paz. <br> 
    Fortalezas: Posee una gran sensibilidad, se le facilitan <br> 
    las relaciones con las mujeres e inspira confianza. Favorece las relaciones personales. <br>
    ¿Qué busca?: Calidez. <br>
    Le gusta la ropa suelta y relajada, pero se diferencia en los materiales de la ropa. <br>
    Prefiere las texturas gruesas y suaves al tacto como la lana, la pana, el ante y la gamuza.  <br>
    Utiliza patrones en las telas como rombos y cuadros, y sus colores favoritos son los claros y pastel. Sus <br>
    prendas predilectas son los suéteres, chalecos, bufandas y cuellos de tortuga. Le gusta traer el pelo un poco largo y ondulado. <br>
    En el adjunto te dejo algunas ideas para el día a día. <br> <br>
    
    Saludos Karinna
    
    </h3>`; 
    

    const CLIENT_ID = "1098980030856-peiurfpbd8rllfghid4bis9gc2qhungt.apps.googleusercontent.com";
    const CLIENT_SECRET="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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//04lyhcopHgxZOCgYIARAAGAQSNwF-L9Ir3xJggH5e5appqVCFB826WJW8_042BXxWlr1oTK37VbfTqMBy8uFtnImrctKBNliDX3A";
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);

    oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

   async function sendMail(){

    try{
        const TokenAcceso =await oAuth2Client.getAccessToken();
        const transport =  nodemailer.createTransport({
            service: "gmail",
            auth:{
                type:"OAuth2",
                user:  "prueba.envio.email.nodejs@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: "TokenAcceso"
            },
        });
        
            const MailCliente = {
                from: "Test de estilo <prueba.envio.email.nodejs@gmail>",
                to: correo , //hacia donde va dirigido el correo
                subject: "Respuesta test de estilo",
                html: TextoRespuesta,
                attachments:[{
                    filename:'Estilo Romantico.pdf',
                    path:'./src/pdf/Estilo Romantico.pdf'
                }],
            };  
            const MailRespaldo= {
                from: "Posible Cliente <prueba.envio.email.nodejs@gmail>",
                to: "jose.c.escobar.v@gmail.com" , //hacia donde va dirigido el correo
                subject: "Cliente potencial ",
                html: CorreoRespaldo,
            };
            const result = await transport.sendMail(MailCliente)
            const result2 = await transport.sendMail(MailRespaldo)
            return result,result2;
    }
    catch(err){
        console.log(err);
    }
    }
    sendMail()
    .then((result)=>res.status(200).send("enviado"))
    .catch((error)=> console.log("error"));
   
});
router.post('/send-email-e',(req,res)=>{
    const {mail}=req.body
    const correo = `${mail}`;
    const CorreoRespaldo = `
    <ul>
    <li>gmail: ${mail}</li>
    </ul>
    `;
    const TextoRespuesta = `<h3 style="color: #2e2d2d; font-family: 'Roboto';">
    Hola <br> 
    Gracias por realizar este Test de Estilo Masculino. <br> 
    Aquí te dejo el resultado completo y de regalo algunas ideas para usar en el día a día. <br> <br>
    
    Tu estilo es SEDUCTOR y………. <br> <br>
    
    Tu apariencia: Atractivo, atrevido y sensual. Llamativo, tentador y desinhibido. <br> 
    Mensaje: Provocativo y sugerente. Excitante y apremiante. <br> 
    Fortalezas: Atrae al sexo opuesto, se ve con confianza  <br> 
    en sí mismo y provoca sensaciones. Motiva el cuidado del  <br> 
    cuerpo; si no fuera agradable, sus efectos serían contraproducentes. <br>
    ¿Qué busca?: Llamar la atención <br> 
    Su guardarropa es muy viril, su chamarra de cuero es indispensable. <br>
     Su color favorito es el negro, lo combina con colores sólidos; también le gustan los tonos metálicos. <br>
    En sus accesorios se encuentran los brazaletes, los anillos y las cadenas de oro o collares, <br>
    también suele ponerse un arete y tiene un tatuaje en un lugar sugerente. El mejor complemento son las botas <br>
    vaqueras y una fuerte y especiado perfume. <br> <br>
    
    En el adjunto te dejo algunas ideas para el día a día. <br> <br> 
    
    Saludos Karinna
    
    </h3>`; 
    

    const CLIENT_ID = "1098980030856-peiurfpbd8rllfghid4bis9gc2qhungt.apps.googleusercontent.com";
    const CLIENT_SECRET="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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//04lyhcopHgxZOCgYIARAAGAQSNwF-L9Ir3xJggH5e5appqVCFB826WJW8_042BXxWlr1oTK37VbfTqMBy8uFtnImrctKBNliDX3A";
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);

    oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

   async function sendMail(){

    try{
        const TokenAcceso =await oAuth2Client.getAccessToken();
        const transport =  nodemailer.createTransport({
            service: "gmail",
            auth:{
                type:"OAuth2",
                user:  "prueba.envio.email.nodejs@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: "TokenAcceso"
            },
        });
        
            const MailCliente = {
                from: "Test de estilo <prueba.envio.email.nodejs@gmail>",
                to: correo , //hacia donde va dirigido el correo
                subject: "Respuesta test de estilo",
                html: TextoRespuesta,
                attachments:[{
                    filename:'Estilo Seductor.pdf',
                    path:'./src/pdf/Estilo Seductor.pdf'
                }],
            };  
            const MailRespaldo= {
                from: "Posible Cliente <prueba.envio.email.nodejs@gmail>",
                to: "jose.c.escobar.v@gmail.com" , //hacia donde va dirigido el correo
                subject: "Cliente potencial ",
                html: CorreoRespaldo,
            };
            const result = await transport.sendMail(MailCliente)
            const result2 = await transport.sendMail(MailRespaldo)
            return result,result2;
    }
    catch(err){
        console.log(err);
    }
    }
    sendMail()
    .then((result)=>res.status(200).send("enviado"))
    .catch((error)=> console.log("error"));
   
});
router.post('/send-email-f',(req,res)=>{
    const {mail}=req.body
    const correo = `${mail}`;
    const CorreoRespaldo = `
    <ul>
    <li>gmail: ${mail}</li>
    </ul>
    `;
    const TextoRespuesta = `<h3 style="color: #2e2d2d; font-family: 'Roboto';">
    Hola <br>
    Gracias por realizar este Test de Estilo Masculino. <br>
    Aquí te dejo el resultado completo y de regalo algunas ideas para usar en el día a día. <br> <br>
    
    Tu estilo es CREATIVO y………. <br> <br>

    Tu apariencia: Original, imaginativo, artístico, poco convencional y no sigue las reglas. <br>
    Mensaje: Libre y diferente. Innovador y aventurero. <br>
    Fortalezas: Individualidad ante la vida, creatividad y talento, capacidad de expresión e independencia. <br> <br> 
    ¿Qué busca?: Ser diferente y original <br> <br>
    Mezcla diseños, colores, texturas y patrones al mismo tiempo. Se caracteriza por su corte de pelo diferente, <br>
    muchas veces en colores poco usuales. Sus accesorios son distintos y a veces piensa que el maquillaje no es sólo para las mujeres. <br>
    Pone mucho énfasis en la originalidad de sus zapatos. <br> <br>
    
    En el adjunto te dejo algunas ideas para el día a día. <br> <br>
    
    Saludos Karinna
    
    </h3>`; 
    

    const CLIENT_ID = "1098980030856-peiurfpbd8rllfghid4bis9gc2qhungt.apps.googleusercontent.com";
    const CLIENT_SECRET="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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//04lyhcopHgxZOCgYIARAAGAQSNwF-L9Ir3xJggH5e5appqVCFB826WJW8_042BXxWlr1oTK37VbfTqMBy8uFtnImrctKBNliDX3A";
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);

    oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

   async function sendMail(){

    try{
        const TokenAcceso =await oAuth2Client.getAccessToken();
        const transport =  nodemailer.createTransport({
            service: "gmail",
            auth:{
                type:"OAuth2",
                user:  "prueba.envio.email.nodejs@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: "TokenAcceso"
            },
        });
        
            const MailCliente = {
                from: "Test de estilo <prueba.envio.email.nodejs@gmail>",
                to: correo , //hacia donde va dirigido el correo
                subject: "Respuesta test de estilo",
                html: TextoRespuesta,
                attachments:[{
                    filename:'Estilo Creativo.pdf',
                    path:'./src/pdf/Estilo Creativo.pdf'
                }],
            };  
            const MailRespaldo= {
                from: "Posible Cliente <prueba.envio.email.nodejs@gmail>",
                to: "jose.c.escobar.v@gmail.com" , //hacia donde va dirigido el correo
                subject: "Cliente potencial ",
                html: CorreoRespaldo,
            };
            const result = await transport.sendMail(MailCliente)
            const result2 = await transport.sendMail(MailRespaldo)
            return result,result2;
    }
    catch(err){
        console.log(err);
    }
    }
    sendMail()
    .then((result)=>res.status(200).send("enviado"))
    .catch((error)=> console.log("error"));
   
});
router.post('/send-email-g',(req,res)=>{
    const {mail}=req.body
    const correo = `${mail}`;
    const CorreoRespaldo = `
    <ul>
    <li>gmail: ${mail}</li>
    </ul>
    `;
    const TextoRespuesta = `<h3 style="color: #2e2d2d; font-family: 'Roboto';">
            Hola <br>
        Gracias por realizar este Test de Estilo Masculino. <br>
        Aquí te dejo el resultado completo y de regalo algunas ideas para usar en el día a día. <br>  <br>
        
        Tu estilo es DRAMÁTICO y………. <br> <br>
        
        Tu apariencia: Dominante y sofisticado, de poder y autoridad. <br>  
        Mensaje: De personalidad intensa y seguro de sí mismo.  <br> 
        Exigente, atrevido, cosmopolita y remoto. <br>
        Fortalezas: Llama la atención por su estilo exagerado y se ve como alguien con experiencia.  <br>
        Se ve moderno y con mucho mundo. <br> <br>
        ¿Qué busca?: Impactar <br> <br> 
        El diseño de su ropa es muy estructurado, pero no clásico, por lo estilizado y exagerado. <br>  
        Le gusta vestir de un solo color, o a lo mucho de dos, siempre y cuando sean muy contrastantes. <br>
        Sus accesorios son más grandes de lo normal y su cinturón negro de cocodrilo combina a la perfección <br>
        con sus zapatos puntiagudos del mismo material. Le gusta utilizar mascadas como el gazné y los guantes de piel. <br> 
        En el adjunto te dejo algunas ideas para el día a día. <br> <br>
        
        Saludos Karinna
    
    </h3>`; 
    

    const CLIENT_ID = "1098980030856-peiurfpbd8rllfghid4bis9gc2qhungt.apps.googleusercontent.com";
    const CLIENT_SECRET="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";
    const REDIRECT_URI="https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN="1//04lyhcopHgxZOCgYIARAAGAQSNwF-L9Ir3xJggH5e5appqVCFB826WJW8_042BXxWlr1oTK37VbfTqMBy8uFtnImrctKBNliDX3A";
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);

    oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

   async function sendMail(){

    try{
        const TokenAcceso =await oAuth2Client.getAccessToken();
        const transport =  nodemailer.createTransport({
            service: "gmail",
            auth:{
                type:"OAuth2",
                user:  "prueba.envio.email.nodejs@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: "TokenAcceso"
            },
        });
        
            const MailCliente = {
                from: "Test de estilo <prueba.envio.email.nodejs@gmail>",
                to: correo , //hacia donde va dirigido el correo
                subject: "Respuesta test de estilo",
                html: TextoRespuesta,
                attachments:[{
                    filename:'Estilo Dramatico.pdf',
                    path:'./src/pdf/Estilo Dramatico.pdf'
                }],
            };  
            const MailRespaldo= {
                from: "Posible Cliente <prueba.envio.email.nodejs@gmail>",
                to: "jose.c.escobar.v@gmail.com" , //hacia donde va dirigido el correo
                subject: "Cliente potencial ",
                html: CorreoRespaldo,
            };
            const result = await transport.sendMail(MailCliente)
            const result2 = await transport.sendMail(MailRespaldo)
            return result,result2;
    }
    catch(err){
        console.log(err);
    }
    }
    sendMail()
    .then((result)=>res.status(200).send("enviado"))
    .catch((error)=> console.log("error"));
   
});
module.exports = router;
