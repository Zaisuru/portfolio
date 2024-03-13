let frontSkill = ["HTML",
"CSS",
"JavaScript",
"ReactJs"];
let frontSkillPercent=[70,
50,
35,
20];

let backSkill = [
    "Php",
    "MySQL",
    "MariaDB"
];
let backSkillPercent=[
    25,
    60,
    40
];

let otherSkill = [
    "Administration Systèmes",
    "Administration Réseau",
    "PowerShell",
    "Batch",
    "Bash",
    "Gestion de projet"
];
let otherSkillPercent=[
    70,
    60,
    65,
    60,
    40,
    65
];

function addFrontSkill(){

    for (i = 0; i < frontSkill.length; i++){

        // add tag element
        const title = document.createElement("p");
        const progressDiv = document.createElement("div");
        const progressBarDiv = document.createElement("div");

        // add class element
        title.classList.add("test");
        progressDiv.classList.add("progress");
        progressBarDiv.classList.add("progress-bar","progress-bar-striped","progress-bar-animated");

        // add Id Element
        title.setAttribute("id", "title"+frontSkill[i]);
        progressDiv.setAttribute("id", "progressDiv"+frontSkill[i]);
        progressBarDiv.setAttribute("id", "progressBarDiv"+frontSkill[i]);

        // add content in tag
        title.textContent = frontSkill[i];

        progressBarDiv.setAttribute("role", "progressbar");
        progressBarDiv.setAttribute("style", "width : "+ frontSkillPercent[i]+"%");
        progressBarDiv.setAttribute("aria-valuenow", frontSkillPercent[i]);
        progressBarDiv.setAttribute("aria-valuemin", "0");
        progressBarDiv.setAttribute("aria-valuemax", "100");

        //add element in HTML

        document.getElementById("cardBodyFront").appendChild(title);
        document.getElementById(title.id).appendChild(progressDiv);
        document.getElementById(progressDiv.id).appendChild(progressBarDiv);

        console.log("Test");
    }
}


function addOtherSkill(){

    for (i = 0; i < otherSkill.length; i++){

        // add tag element
        const title = document.createElement("p");
        const progressDiv = document.createElement("div");
        const progressBarDiv = document.createElement("div");

        // add class element
        title.classList.add("test");
        progressDiv.classList.add("progress");
        progressBarDiv.classList.add("progress-bar","progress-bar-striped","progress-bar-animated");

        // add Id Element
        title.setAttribute("id", "title"+otherSkill[i]);
        progressDiv.setAttribute("id", "progressDiv"+otherSkill[i]);
        progressBarDiv.setAttribute("id", "progressBarDiv"+otherSkill[i]);

        // add content in tag
        title.textContent = otherSkill[i];

        progressBarDiv.setAttribute("role", "progressbar");
        progressBarDiv.setAttribute("style", "width : "+ otherSkillPercent[i]+"%");
        progressBarDiv.setAttribute("aria-valuenow", otherSkillPercent[i]);
        progressBarDiv.setAttribute("aria-valuemin", "0");
        progressBarDiv.setAttribute("aria-valuemax", "100");

        //add element in HTML

        document.getElementById("cardBodyOther").appendChild(title);
        document.getElementById(title.id).appendChild(progressDiv);
        document.getElementById(progressDiv.id).appendChild(progressBarDiv);

        console.log("Test");
    }
}

function addBackSkill(){

    for (i = 0; i < backSkill.length; i++){

        // add tag element
        const title = document.createElement("p");
        const progressDiv = document.createElement("div");
        const progressBarDiv = document.createElement("div");

        // add class element
        title.classList.add("test");
        progressDiv.classList.add("progress");
        progressBarDiv.classList.add("progress-bar","progress-bar-striped","progress-bar-animated");

        // add Id Element
        title.setAttribute("id", "title"+backSkill[i]);
        progressDiv.setAttribute("id", "progressDiv"+backSkill[i]);
        progressBarDiv.setAttribute("id", "progressBarDiv"+backSkill[i]);

        // add content in tag
        title.textContent = backSkill[i];

        progressBarDiv.setAttribute("role", "progressbar");
        progressBarDiv.setAttribute("style", "width : "+ backSkillPercent[i]+"%");
        progressBarDiv.setAttribute("aria-valuenow", backSkillPercent[i]);
        progressBarDiv.setAttribute("aria-valuemin", "0");
        progressBarDiv.setAttribute("aria-valuemax", "100");

        //add element in HTML

        document.getElementById("cardBodyBack").appendChild(title);
        document.getElementById(title.id).appendChild(progressDiv);
        document.getElementById(progressDiv.id).appendChild(progressBarDiv);

        console.log("Test");
    }
}

