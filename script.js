// //Récupérer l'élément image par son ID
// let imageCliquable = document.getElementById("imageCliquable");

// //Créer une class pour ma première page
// document.body.classList.add('home')

// //Ajouter un gestionnaire d'évenements pour le clic
// imageCliquable.addEventListener("click", function () {
//     document.body.classList.remove('home')

//     //Créer une nouvelle page dynamiquement
//     let nouvellePage = document.createElement("div");
//     nouvellePage.classList.add('page2')

//     //Ajout du titre h1 en haut de la nouvelle page
//     let titreH1 = document.createElement("h1");
//     titreH1.textContent = "Gestionnaire de contacts";
//     nouvellePage.appendChild(titreH1);

//     //Remettre l'image dans la nouvelle page
//     let nouvelleImage = document.createElement("img");
//     nouvelleImage.src = "contact.png";
//     nouvelleImage.alt = "Image dans la nouvelle page";


//     nouvellePage.appendChild(nouvelleImage);


//     //Menu déroulant de la nouvelle page
//     let menuDeroulant = document.createElement("select");

//     //Options du menu déroulant
//     let options = ["Que voulez vous faire ?", "Lister les contacts", "Ajouter un contact", "Voir le nombre de contacts"];
//     options.forEach(function (optionText) {
//         let option = document.createElement("option");
//         option.text = optionText;
//         menuDeroulant.add(option);

//     });

//     nouvellePage.appendChild(menuDeroulant);


//     //Style css de mes éléments
//     nouvelleImage.style.alignItems = "center";
//     nouvellePage.style.textAlign = "center";
//     menuDeroulant.style.backgroundColor = "red";
//     menuDeroulant.style.color = "white";

//     //Ajouter la nouvelle page au corps du document
//     document.body.innerHTML = "";
//     document.body.appendChild(nouvellePage);
// });





let contacts = [];

function showContactPage() {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("contactPage").style.display = "block";
    document.getElementById("addContactForm").style.display = "none";
    document.getElementById("contactList").style.display = "none";
    document.getElementById("contactCount").style.display = "none";
}

function handleContactOption() {
    const option = document.getElementById("contactOptions").value;

    if (option === "add") {
        showAddContactForm();
    } else if (option === "list") {
        listContacts();
    } else if (option === "count") {
        showContactCount();
    }
}

function showAddContactForm() {
    document.getElementById("addContactForm").style.display = "block";
    document.getElementById("contactList").style.display = "none";
    document.getElementById("contactCount").style.display = "none";
}

function resetAddContactForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
}

function addContactFromForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    const contact = {
        firstName,
        lastName,
        phoneNumber
    };

    contacts.push(contact);
    listContacts();
    resetAddContactForm(); // Réinitialiser le formulaire
    document.getElementById("addContactForm").style.display = "none";
}

function listContacts() {
    const contactContent = document.getElementById("contactList");
    contactContent.innerHTML = "<h2>Liste des Contacts</h2>";

    if (contacts.length === 0) {
        contactContent.innerHTML += "<p>Aucun contact.</p>";
    } else {
        contacts.forEach(contact => {
            contactContent.innerHTML += `<p>${contact.firstName} ${contact.lastName} - ${contact.phoneNumber}</p>`;
        });
    }

    document.getElementById("addContactForm").style.display = "none";
    document.getElementById("contactCount").style.display = "none";
    document.getElementById("contactList").style.display = "block";
}

function showContactCount() {
    const contactContent = document.getElementById("contactCount");
    contactContent.innerHTML = `<h2>Nombre de Contacts</h2><p>${contacts.length}</p>`;

    document.getElementById("addContactForm").style.display = "none";
    document.getElementById("contactList").style.display = "none";
    document.getElementById("contactCount").style.display = "block";
}