window.onscroll = function() {
    addStickyHeader();
};

const header = document.querySelector('header');
const sticky = header.offsetTop;

function addStickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

const bookingForm = document.getElementById('bookingForm');
const submitBtn = document.getElementById('submitBtn');
const confirmationMessage = document.getElementById('confirmationMessage'); 

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); 

  const formData = new FormData(bookingForm);
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  fetch('https://safari-omega.vercel.app/API/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formObject)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);


      confirmationMessage.innerText = "Your booking has been successfully submitted!";
      confirmationMessage.style.display = "block";


      bookingForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
     
      confirmationMessage.innerText = "There was an error submitting your booking. Please try again.";
      confirmationMessage.style.display = "block"; 
    });
});


var naLink = document.getElementById("n-a");
var saLink = document.getElementById("s-a");
var eurLink = document.getElementById("eur");
var afrLink = document.getElementById("afr");
var asiLink = document.getElementById("asi");
var ausLink = document.getElementById("aus");
var naAbout = document.getElementById("north-america");
var saAbout = document.getElementById("south-america");
var eurAbout = document.getElementById("europe");
var afrAbout = document.getElementById("africa");
var asiAbout = document.getElementById("asia");
var ausAbout = document.getElementById("australia");

var link = [naLink, saLink, eurLink, afrLink, asiLink, ausLink];
var about = [naAbout, saAbout, eurAbout, afrAbout, asiAbout, ausAbout];

link.forEach((el, index) => {
    el.addEventListener("mouseover", () => {
        about.forEach((section) => (section.style.display = "none")); // Hide all sections
        about[index].style.display = "block"; // Show the hovered section
    });

    el.addEventListener("mouseleave", () => {
        about[index].style.display = "none"; // Hide the section on mouse leave
    });
});

let menuIcon = document.getElementById('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

document.getElementById('explore-more-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#explore-more').scrollIntoView({ behavior: 'smooth' });
});
