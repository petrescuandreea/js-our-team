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
        "name" : "Wayne Barnett" ,
        "role" : "Founder & CEO" , 
        "image" : 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        "name" : "Wayne Barnett" ,
        "role" : "Founder & CEO" , 
        "image" : 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        "name" : "Wayne Barnett" ,
        "role" : "Founder & CEO" , 
        "image" : 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        "name" : "Wayne Barnett" ,
        "role" : "Founder & CEO" , 
        "image" : 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        "name" : "Wayne Barnett" ,
        "role" : "Founder & CEO" , 
        "image" : 'img/wayne-barnett-founder-ceo.jpg'
    }

];



// stampa degli elementi in pagina 
for (let i = 0; i < membersTeam.length; i++) {
    
    let memberName = "";
    let memberRole = "";
    let memberPhoto = "";

    for (var key in membersTeam) {
            memberName = membersTeam[i].name;
            memberRole = membersTeam[i].role;
            memberPhoto = membersTeam[i].image;
    }

    console.log(memberName);
    console.log(memberRole);
    console.log(memberPhoto);

    memberCard.innerHTML += `
        <div class="team-card">
            <div class="card-img">
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