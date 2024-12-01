// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const form = document.querySelector("form");

function sendEmail() {
 
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const number = document.getElementById("number");
    const emailSubject = document.getElementById("emailSubject");
    const mess = document.getElementById("mess");


    const missingElements = [];
    if (!fullname) missingElements.push("fullname");
    if (!email) missingElements.push("email");
    if (!number) missingElements.push("number");
    if (!emailSubject) missingElements.push("emailSubject");
    if (!mess) missingElements.push("mess");

    if (missingElements.length > 0) {
        console.error("Missing elements:", missingElements.join(", "));
        return;
    }

    const bodymessage = `FullName: ${fullname.value} <br> Email: ${email.value}
        <br> Phone Number: ${number.value} <br> Email Subject: ${emailSubject.value} <br> Message: ${mess.value}`;

    Email.send({
        SecureToken : "a68afe30-7714-4a6b-9e05-be4c518c33d4",
        // Host: "smtp.elasticemail.com",
        // Username: "sharmaharsh472000@gmail.com",
        // Password: "FC68FA5339EBF2955FB1685B5CD92EB6010A",
        To: "sharmaharsh472000@gmail.com",
        From: "sharmaharsh472000@gmail.com",
        Subject: emailSubject.value,
        Body: bodymessage
    }).then(
        message => {
            if(message == "OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                  });
            }
        }
    ).catch(
        error => console.error("Error sending email:", error)
    );
}

function validateMobileNumber(input) {
    // Ensure value length does not exceed 10
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10); // Trim the value to 10 digits
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            sendEmail();
        });
    } else {
        console.error("Form not found!");
    }
});

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll  = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
    //sticky  header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    
}