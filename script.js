let arrayContacts = [];

let contactName = document.querySelector("#contactName");
let contactNumber = document.querySelector("#contactNumber");
let submit = document.querySelector("#submit");
let contactsZone = document.getElementById("contactsZone");

window.onload = () => {
  arrayContacts = JSON.parse(localStorage.getItem("contacts"));

  if (arrayContacts != null) {
    arrayContacts.forEach((contact) => {
      contactsZone.innerHTML += `
      <tr>
        <td>${contact.name}</td>
        <td>${contact.number}</td>
        <td>${contact.id}</td>
        <td><button class="deleteButton" onclick="deletePerson(event)">X</button></td>
      </tr>
      `;
    });
  } else {
    arrayContacts = [];
  }
};

function Contact(name, number, id) {
  this.name = name;
  this.number = number;
  this.id = id;
}

submit.addEventListener("click", function (event) {
  event.preventDefault();
  let usernameID = 1;
  arrayContacts.forEach((contact) => {
    if (contact.name === contactName.value) {
      usernameID += 1;
    }
  });
  if (contactName.value.length > 0 && contactNumber.value.length > 0) {
    let newUser = new Contact(
      contactName.value,
      contactNumber.value,
      usernameID
    );
    arrayContacts.push(newUser);
    localStorage.setItem("contacts", JSON.stringify(arrayContacts));

    contactName.value = "";
    contactNumber.value = "";

    console.log(arrayContacts);
  } else {
    alert("ALL FIELD HAVE TO BE FILLED!!!!");
  }
  location.reload();
});
function deletePerson(event) {
  let name =
    event.currentTarget.parentNode.parentNode.children[0].innerText.trim();
  let id =
    event.currentTarget.parentNode.parentNode.children[2].innerText.trim();

  for (i = 0; i < arrayContacts.length; i++) {
    if (arrayContacts[i].name == name && arrayContacts[i].id == id) {
      arrayContacts.splice(i, 1);

      localStorage.setItem("contacts", JSON.stringify(arrayContacts));
    }
  }

  location.reload();
}
