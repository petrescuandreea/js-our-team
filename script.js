/*

TRACCIA: Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.


*/


// 1. creo un array di oggetti
// 2. stampo le card in pagina => for
// 3. permetto all'utente di aggiungere nuovi membri 


// variabili utili 
let memberCard = document.querySelector(".team-container");



// array
var membersTeam = [
    {
        "name" : "Wayne Barnett" ,
        "role" : "Founder & CEO" , 
        "image" : 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        "name" : "Angela Caroll" ,
        "role" : "Chief Editor" , 
        "image" : 'img/angela-caroll-chief-editor.jpg'
    },
    {
        "name" : "Walter Gordon" ,
        "role" : "Office Manager" , 
        "image" : 'img/walter-gordon-office-manager.jpg'
    },
    {
        "name" : "Angela Lopez" ,
        "role" : "Social Media Manager" , 
        "image" : 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        "name" : "Scott Estrada" ,
        "role" : "Developer" , 
        "image" : 'img/scott-estrada-developer.jpg'
    },
    {
        "name" : "Barbara Ramos" ,
        "role" : "Graphic Designer" , 
        "image" : 'img/barbara-ramos-graphic-designer.jpg'
    }

];



// stampa degli elementi in pagina 
for (let i = 0; i < membersTeam.length; i++) {
    
    let memberName = membersTeam[i].name;
    let memberRole = membersTeam[i].role;
    let memberPhoto = membersTeam[i].image;

    memberCard.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${memberPhoto}"
                    alt="${memberName}"
                />
            </div>
            <div class="card-text">
                <h3>${memberName}</h3>
                <p>${memberRole}</p>
            </div>
        </div>
    `
}