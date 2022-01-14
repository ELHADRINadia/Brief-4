<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" href="assets/css/main.min.css">
    <link rel="stylesheet" href="assets/css/stl.contact.css">


</head>

<body>
    <header class="main-head">
        <nav>
            <h1>Location Voiture</h1>
            <ul>
                <li> <a href="index.html">Home</a></li>
                <li> <a href="Gallerie.html">Gallerie</a></li>
                <li> <a href="Réservation.html">Réservation</a></li>
                <li> <a href="Contact.html">Contact</a></li>

            </ul>
        </nav>
    </header>
    <br> <br> <br> <br> <br> <br> <br> <br>
    <form>
        <div class="container">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <h2>Contact Nous</h2>
                    <input type="text" class="field" id="c1" placeholder="Votre Nom">
                    <input type="text" class="field" id="c2" placeholder="Votre Email">
                    <input type="text" class="field" id="c3" placeholder="Tel">
                    <textarea placeholder="Message" id="c4" class="field"></textarea>
                    <button class="btn" onclick=" verfier()">Envoyer</button>
                </div>
            </div>
        </div>
    </form>

    <br> <br> <br> <br> <br> <br> <br> <br>










    <footer class="footer">
        <div class="containent">
            <div class="row">
                <div class="footer-col">
                    <h4>Entreprise</h4>
                    <ul>
                        <li><a href="#">index</a></li>
                        <li><a href="#">Gallerie</a></li>
                        <li><a href="#">Reservation</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Obtenir de l'aide</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Enline Reserve</h4>
                    <ul>
                        <li><a href="#">Moto</a></li>
                        <li><a href="#">Citadine</a></li>
                        <li><a href="#">camio</a></li>
                        <li><a href="#">Utilitaire</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'poppins';
}

body {
    height: 100vh;
    width: 100%;
    margin: 0;
    font-family: 'open sans';
    background-image: url(../images/A14.jpg);
}

.container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 100px;
}

.container:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("../images/A14.jpg") no-repeat center;
    background-size: cover;
    filter: blur(50px);
    z-index: -1;
}

.contact-box {
    max-width: 850px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #35589A;
    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
}

.left {
    background: url("../images/A19.jpg") no-repeat center;
    background-size: cover;
    height: 100%;
}

.right {
    padding: 25px 40px;
}

h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
}

h2:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #370665;
}

.field {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: #5c6664;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    margin-bottom: 22px;
    transition: .3s;
}

.field:hover {
    background-color: #fff;
}

textarea {
    min-height: 150px;
}

.btn {
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #370665;
    color: #fff;
    font-size: 1.1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: .3s;
}

.btn:hover {
    background-color: #370665;
}

.field:focus {
    border: 2px solid rgba(30, 85, 250, 0.47);
    background-color: #fff;
}

@media screen and (max-width: 880px) {
    .contact-box {
        grid-template-columns: 1fr;
    }
    .left {
        height: 200px;
    }
}
    </style>
</body>


</html>