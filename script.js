document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "light" ? "🌙" : "☀️";

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "light" ? "🌙" : "☀️";
  });

  const phrases = [
    "An Aspiring Web Developer",
    "Transitioning from Data Analysis to Tech",
    "Building Modern, Smart, and Interactive Web Experiences",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeText = document.getElementById("typeText");

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typeText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => (isDeleting = true), 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
  }

  type();

  const sections = document.querySelectorAll("section");
  const revealSection = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75;
      if (isVisible) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection();

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        document.getElementById("navMenu").classList.remove("active");
      }
    });
  });

  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle) {
      mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
          alert("Please fill in all fields.");
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }

        // If validation passes, submit the form
        // Since we prevented default, we need to manually submit or use fetch
        // For Formspree, we can just let it submit if we didn't prevent default,
        // but since we did for validation, we can submit it now.
        contactForm.submit(); 
        
        // Ideally with Formspree AJAX:
        /*
        fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("Thank you for your message! I will get back to you soon.");
                contactForm.reset();
            } else {
                alert("Oops! There was a problem submitting your form");
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form");
        });
        */
      });
  }

  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
      scrollIndicator.addEventListener("click", () => {
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
      });
  }
});

document.querySelector(".scroll-indicator").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});
