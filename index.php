<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/html">
<head>
  <meta charset="UTF-8">
  <link rel="shortcut icon" type="image/png" href="pictures/logo.png"/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/88ce417d72.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" type="text/css" href="styles/css/main.css">
  <title>Holderbaum Thomas - Développeur FullStack</title>
</head>
<body>
  <div class="row homePresentation">
    <div class="container">
      <div class="col-lg-12 text-center">
        <img src="pictures/thomas.PNG" width="400px" alt="photo de profil de Thomas Holderbaum" class="img-rounded homeImg">
      </div>
      <div class="col-12 text-center">
        <h1 class="display-4">Thomas Holderbaum</h1>
        <p>Bonjour ! <br><br>Admin systèmes depuis maintenant 10 ans, je suis actuellement en reconversion vers le développement web.
          <br><br>Expert en gestion d'infrastructures, je fusionne expérience et passion du code.
          <br>Motivé par la créativité, je suis prêt pour de nouveaux défis !
          <br><br>Découvrez l'alliance unique entre mon expérience en admin systèmes et ma nouvelle passion pour le développement web.
          <br><br>Afin d'en connaitre d'avantages sur mon parcours professionnel vous pouvez télécharger mon CV <br><br><a href="#" class="btn btn-primary btn-dark" id="btnCV">ici</a></p>
      </div>
    </div>
  </div>

  <div id="skills">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center p-5">
          <h2 class="display-4">Mes compétences</h2>
        </div>
      </div>
      <div class="row" id="skillContainer">

       <div class="col-sm-12 col-lg-4">
          <div class="card skillCard">
            <div class="card-title ">
              <h3 class="display-6 text-center">Back-end</h3>
              <div class="card-body" id="cardBodyBack">
                <script type="text/javascript" src="script/progressBar.js" onload="addBackSkill()"></script>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-4">
          <div class="card skillCard">
            <div class="card-title">
              <h3 class="display-6 text-center">Front-end</h3>
              <div class="card-body"  id="cardBodyFront">
                <script type="text/javascript" src="script/progressBar.js" onload="addFrontSkill()"></script>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-4" >
          <div class="card skillCard">
            <div class="card-title">
              <h3 class="display-6 text-center">Autres</h3>
              <div class="card-body"  id="cardBodyOther">
                <script type="text/javascript" src="script/progressBar.js" onload="addOtherSkill()"></script>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div id="projects">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center p-5">
              <h2 class="display-4">Mes réalisations</h2>
            </div>
          </div>
          <div class="row" id="projectContainer">
            <script type="text/javascript" src="script/card.js" onload="addElement()"></script>
          </div>
        </div>
    </div>
  <div id="contactMe">
    <div class="container">
      <div class="row">
        <div class="col-12 p-5 text-center">
          <h2 class="display-4">Contactez moi</h2>
        </div>
        <form method="post" action="script/form.php">
          <div class="form-row">
            <div class="col-lg-6 col-sm-12">
              <label for="firstName">Votre prénom</label>
              <input type="text" class="form-control" placeholder="John" id="firstName" name="firstName" required>
            </div>
            <div class="col-lg-6 col-sm-12">
              <label for="lastName">Votre Nom</label>
              <input type="text" class="form-control" placeholder="Doe" id="lastName" name="lastName" required>
            </div>
          </div>
          <div class="form-row">
            <label for="email">Votre email</label>
            <input type="email" class="form-control" id="email" placeholder="john.doe@contoso.com" name="email" required>
          </div>

          <div class="form-row">
            <label for="textareaMessage">Ecrivez votre message ici : </label>
            <textarea class="form-control" rows="6" id="textareaMessage" placeholder="Votre Message" name="msg"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary mb-2 text-center formBtn btn-light">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</body>
</html>