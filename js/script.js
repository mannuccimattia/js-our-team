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

// recupero i campi del form
const nameField = document.getElementById("name");
const roleField = document.getElementById("role");
const emailField = document.getElementById("email");
const imgField = document.getElementById("img");
const button = document.getElementById("send");
const membersList = document.getElementById("team-members")

// funzione per creare la singola card del membro del team
const createMemberCard = (member) => {
  const {name, role, email, img} = member

  const card = `<div class="col-12 col-md-6 col-xl-4">
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

// event listner
button.addEventListener("click", (e) => {
  e.preventDefault();

  // recupero i valori inseriti nella form
  const name = nameField.value;
  const role = roleField.value;
  const email = emailField.value;
  const img = imgField.value;

  // se i valori sono compilati li assegno a un nuovo oggetto
  if (!name || !role || !email || !img) {
    alert("Compila tutti i campi");
    return
  };
  const newMember = {
    name,
    role,
    email,
    img
  };

  // aggiungo l'oggetto all'array originale
  teamMembers.push(newMember);

  // azzero i campi della form
  nameField.value = "";
  roleField.value = "";
  emailField.value = "";
  imgField.value = "";

  // chiamo nuovamente renderTeam per renderizzare la nuova card
  renderTeam(teamMembers);
});