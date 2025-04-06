
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
}






// countdown timer


 // Countdown Timer Script
 function startCountdown(targetDate) {
    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.querySelector(".countdown").innerHTML = "<h2>Event Has Started!</h2>";
            clearInterval(interval);
            return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, "0");
        document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
}

// Set Event Date: (Year, Month [0=Jan], Day, Hour, Minute, Second)
const eventDate = new Date(2025, 6, 15, 9, 0, 0).getTime(); // July 15, 2025, 9:00 AM
startCountdown(eventDate);







// FAQ LOGIC


document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});




// COMMUNITY COUNTING NUMBERS

function startCounter() {
    const counters = document.querySelectorAll('.counter');
    const speed = 20; 

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            let count = +counter.innerText.replace('+', ''); 
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment + '+';
                setTimeout(updateCount, 200); 
            } else {
                counter.innerText = target + '+'; 
            }
        };

        updateCount();
    });
}

// Trigger only when the section is in view
function handleScroll() {
    const statsSection = document.querySelector('.impact-stats');
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        startCounter();
        window.removeEventListener('scroll', handleScroll); // Prevents re-running
    }
}

window.addEventListener('scroll', handleScroll);
