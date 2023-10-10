hdr =
    `   
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Propieteer - Staff -</title>
        <link rel="stylesheet" href="../CSS/styles.css">
        <link rel="shortcut icon" href="../resources/real-estate2.png" type="image/x-icon">
        <!-- ATRIBUTED TO: <a href="https://www.flaticon.es/iconos-gratis/bienes-raices" title="bienes raíces iconos">Bienes raíces iconos creados por Vector Valley - Flaticon</a> -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner:wght@400;500;600;700&family=Ms+Madi&family=Sacramento&family=Wix+Madefor+Display:wght@500;700&family=Ysabeau+SC:wght@500;600;800&display=swap&family=AR+One+Sans:wght@400;500;700&display=swap&family=Quicksand:wght@300;600&display=swap" rel="stylesheet" rel=" stylesheet">
    </head>
`

nav =
    `
    <nav class="container-nav">
        <a class="logo" href="index.html"><img class="logo" src="../resources/logo.png" alt="PROPIETEER LOGO" title="Home Page"></a>
        <ul>
            <li class="menu">
                <a class="line" href="agentes.html">Agentes </a>
            </li>
            <li class="menu">
                <a class="line" href="propiedades.html">Propiedades</a>
            </li>
            <li class="menu">
                <a class="line" href="vende-con-nos.html">Vende con nosotros</a>
            </li>
        </ul>
    </nav>
`

ftr =
    `   
    <a href="index.html"><img id="footerImagen" src="../resources/logo.png" alt="PROPIETEER LOGO" title="Home Page"></a>
    <ul class="footer-contacto">
        <li>Av. Siempre Viva 1553</li>
        <li>1234-5678/ 11-9876-5432</li>
        <li><a href="mailto:propieteer@gmail.com">propieteer@gmail.com</a></li>
    </ul>
    <ul class="redes-container">
        <li><a href="https://www.instagram.com" target="_blank"><img src="../resources/instagram.svg" alt="propieteer instagram" class="redes"></a></li>
        <li><a href="https://www.facebook.com" target="_blank"><img src="../resources/square-facebook.svg" alt="propieteer facebook" class="redes"></a></li>
        <li><a href="https://www.twitter.com" target="_blank"><img src="../resources/twitter.svg" alt="propieteer twitter" class="redes" ></a></li> 
        <li><a href="https://api.whatsapp.com/send?phone=11674158639121&text=Hola!%20Me%20gustaría%20hacer%20unar%20consulta%20%F0%9F%98%8A" target="_blank"><img src="../resources/whatsapp.svg" alt="propieteer whatsapp" class="redes"></a></li>  
    </ul>
    <p class="copy">Todos los derechos reservados RoMaFeLe INC 2023</p>
    <p>Sitio desarrollado por Romina Gargano, Marco Nuñez, Federica Taborda y Leando Luna - estudiantes Codo a Codo 2023</p>
`

document.querySelector("head").innerHTML = hdr
document.querySelector("header").innerHTML = nav
document.querySelector("footer").innerHTML = ftr

