// Toggle header

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('show');
  });











/// Countdown Timer Script
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
const eventDate = new Date(2025, 9, 1, 9, 0, 0).getTime(); // September 1, 2025, 9:00 AM
startCountdown(eventDate);


/// Mobile-optimized counter animation
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let animationStarted = false;

  const animateCounters = () => {
    if (animationStarted) return;
    animationStarted = true;
    
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1000; // 2 seconds total animation
      let start = null;
      
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        const value = Math.floor(percentage * target);
        
        counter.textContent = value.toLocaleString();
        
        if (percentage < 1) {
          window.requestAnimationFrame(step);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
      
      window.requestAnimationFrame(step);
    });
  };

  // Mobile-friendly intersection observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Lower threshold for mobile
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Small delay to ensure mobile browsers are ready
        setTimeout(animateCounters, 300);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const section = document.querySelector('#community');
  if (section) {
    observer.observe(section);
  }

  // Fallback for older mobile browsers
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    setTimeout(() => {
      if (!animationStarted) {
        animateCounters();
      }
    }, 1000);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCounters);
} else {
  initCounters();
}



//   FAQ SECTION

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const openItem = document.querySelector('.faq-item.active');
      if (openItem && openItem !== item) {
        openItem.classList.remove('active');
      }
      item.classList.toggle('active');
    });
  });
