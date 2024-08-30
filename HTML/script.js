console.log("Hey");

document.addEventListener("DOMContentLoaded", function() {
    let readMore = document.querySelector('.read-more-1');
    let readMoreContent = document.querySelector('.Read-More'); 
    let readLess = document.querySelector('.read-less');

    readMore.addEventListener("click", function(e) {
        e.preventDefault();
        if (readMoreContent.style.display === "none" || readMoreContent.style.display === "") {
            readMoreContent.style.display = "block";
            readMore.innerHTML = "Read Less <i class='uil uil-arrow-right'></i>";
        } else {
            readMoreContent.style.display = "none";
            readMore.innerHTML = "Read More <i class='uil uil-arrow-right'></i>";
        }
    });


    readLess.addEventListener("click", function(e) {
        e.preventDefault();
        readMoreContent.style.display = "none";
        readMore.innerHTML = "Read More <i class='uil uil-arrow-right'></i>";

    });

    let readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let contentContainer = this.parentElement.parentElement.querySelector('.community-tab');
            
            if (contentContainer.style.height === '200px' || !contentContainer.style.height) {
                contentContainer.style.height = 'auto';
                this.textContent = "Read Less";
            } else {
                contentContainer.style.height = '200px';
                this.textContent = "Read More";
            }
        });
    });


    
});
   
let signin = document.querySelector("#signin");

signin.addEventListener("click", function(e) {
    e.preventDefault();
    let email = document.querySelector('#LoginEmail').value;
    let password = document.querySelector('#LoginPassword').value;
    if (email === 'admin@demo.com' && password === 'admin@mintyourideas') {
        window.location.href = "dashboard.html";
    } else {
        alert('Register first');
    }
});



