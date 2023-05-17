const awaitDetails = document.getElementById("login");

awaitDetails.addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('namebox');
    const email = document.getElementById('emailbox');
    const card = document.getElementById('cardbox');
});

function sendPersonalDetails() {
    var username = document.forms['user-login']['namebox'].value;
    var useremail = document.forms['user-login']['emailbox'].value;
    var usercard = document.forms['user-login']['cardbox'].value;

    if (username == "" || username.match(/[^\x20-\x7E]/g)) {
        document.getElementById("name").style.color="#700064";
        var noUserEntered = true;
    } else {
        document.getElementById("name").style.color="black";
        var noUserEntered = false; 
    }
    if (useremail == "" || useremail.match(/[^\x20-\x7E]/g)) {
        document.getElementById("email").style.color="#700064";
        var noEmailEntered = true;
    } else {
        document.getElementById("email").style.color="black";
        var noEmailEntered = false;
    }
    if (usercard == "" || usercard.match(/[^\x20-\x7E]/g)) {
        document.getElementById("card").style.color="#700064";
        var noCardEntered = true;
    } else {
        document.getElementById("card").style.color="black";
        var noCardEntered = false;
    }
    if (usercard.match(/[^$,.\d]/)) {
        document.getElementById("card").style.color="#700064";
        var invalidCard2 = true;
        alert("This is an invalid card.");
    } else {
        invalidCard2 = false;
    }

    const unlen = username.length;
    const cdlen = usercard.toString().length;

    if (unlen <= 4) {
        document.getElementById("name").style.color="#700064";
        alert("This is not a valid name.");
    }
    if (cdlen != 16) {
        document.getElementById("card").style.color="#700064";
        var invalidCard = true;
        alert("This is not a valid card.")
    } else {
        invalidCard = false;
    }
    if (useremail.includes("@") == false) {
        document.getElementById("email").style.color="#700064";
        alert("This is not a valid email.")
    }
    if (unlen >= 5 && cdlen == 16 && useremail.includes("@")) {
        document.getElementById("name").style.color="black";
        document.getElementById("email").style.color="black";
        document.getElementById("card").style.color="black";
    }
    if (noUserEntered || noEmailEntered || noEmailEntered) {
        alert("You must submit details for every box.")
    }
    if (noUserEntered == false && noEmailEntered == false && noCardEntered == false && invalidCard == false && invalidCard2 == false) {
        alert("Processing details.")
        var frm = document.getElementsByName('user-login')[0];
        frm.submit()
        frm.reset()
        return false;
    }
}