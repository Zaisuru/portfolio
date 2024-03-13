let titleProject = [
    "Pépinières Epaignes",
    "KiloShop",
    "Booki",
    "Oh My Food",
    "Matrice KiloShop"
];
let describeProject= [
    "Projet pour la pépnière d'Epaignes en Normandie",
    "Application web dans le but de géer une base de données des clients pour ensuite utiliser un outils de newsletter",
    "Projet 2 du parcours Développeur Web chez OpenClassrooms edition 2021",
    "Projet 5 du parcours Développeur Web chez OpenClassrooms edition 2021",
    "Création d'un dashboard de ventes pour les magasins KiloShop"

];
let imgProject = ["pictures/pep.png",
"pictures/KiloShop.png",
"pictures/booki.png",
"pictures/ohMyFood.png"];


let linkProject =["http://www.pepiniere-ets-leclerc.com",
"http://www.pepiniere-ets-leclerc.com",
"https://zaisuru.github.io/Booki/",
"http://www.pepiniere-ets-leclerc.com"
]

function addElement() {
    // declare tag element
    for (i = 0; i < titleProject.length; i++){
        const colDiv = document.createElement("div");
        const img = document.createElement("img");
        const cardDiv = document.createElement("div");
        const cardBodyDiv = document.createElement("div");
        const cardTitleDiv = document.createElement("div");
        const titleCard = document.createElement("h3");
        const paragraph = document.createElement("p");
        const btn = document.createElement("a");

        colDiv.classList.add("col-lg-4");
        colDiv.setAttribute("id","responsive"+titleProject[i]);
        document.getElementById("projectContainer").appendChild(colDiv);

        cardDiv.classList.add("card", "projectCard");
        cardDiv.setAttribute("id", titleProject[i]);
        document.getElementById(colDiv.id).appendChild(cardDiv);

        img.classList.add('card-img-top');
        img.setAttribute("id", titleProject[i]);
        img.setAttribute("src",imgProject[i]);
        document.getElementById(cardDiv.id).appendChild(img);

        cardBodyDiv.classList.add("card-body");
        cardBodyDiv.setAttribute("id", "body"+titleProject[i]);
        document.getElementById(cardDiv.id).appendChild(cardBodyDiv);

        titleCard.classList.add("card-title");
        titleCard.setAttribute("id", "title"+titleProject[i]);
        titleCard.textContent = titleProject[i];
        document.getElementById(cardBodyDiv.id).appendChild(titleCard);

        paragraph.classList.add("card-text");
        paragraph.setAttribute("id", "text"+titleProject[i])
        paragraph.textContent = describeProject[i];
        document.getElementById(cardBodyDiv.id).appendChild(paragraph);

        
        btn.setAttribute("href", linkProject[i]);
        btn.setAttribute("target", "_blank");
        btn.classList.add('btn','btn-primary','btn-light');
        btn.textContent = ("Voir le site");
        document.getElementById(cardBodyDiv.id).appendChild(btn);
    }
}
