const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// funzione per creare la singola card del membro del team
const createMemberCard = (member) => {
  const {name, role, email, img} = member

  const card = `<div class="col-12 col-md-6 col-lg-4">
                  <div class="d-flex">
                    <img src="./${img}" alt="" class="img-fluid">
                    <div class="d-flex flex-column justify-content-center" id="card-text">
                      <h4>${name}</h4>
                      <p>${role}</p>
                      <a href="">${email}</a>
                    </div>
                  </div>
                </div>`;

  return card;                
};

// funzione per renderizzare il contenuto di card
const renderTeam = (array) => {
  let cards = "";

  for(let i=0; i<array.length; i++){
    cards += createMemberCard(array[i]);
  }

  document.getElementById("team-members").innerHTML = cards
}

// chiamo renderTeam passandole l'attay teamMembers
renderTeam(teamMembers);