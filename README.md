# Personal Portfolio Website - Ayodeji Adeyemo

This is the source code for my personal portfolio website. It's a fully responsive single-page application built with vanilla HTML, CSS, and JavaScript to showcase my skills, projects, and professional background as I transition from data analysis to web development.

**Live Demo:** [https://ayodeji-adeyemo.onrender.com/](https://ayodeji-adeyemo.onrender.com/)

![Portfolio Screenshot](<./path/to/your/screenshot.png>) 
*(Note: Add a screenshot of your portfolio and update the path)*

---

## ✨ Features

*   **🎨 Dual-Theme Mode:** Toggle between light and dark themes. Your preference is saved in `localStorage` for future visits.
*   **✍️ Dynamic Typing Effect:** An engaging typewriter animation introduces my professional focus in the hero section.
*   **✨ Scroll-Reveal Animations:** Sections gracefully fade in as you scroll down the page, implemented using the Intersection Observer API for performance.
*   **📱 Fully Responsive:** A mobile-first design ensures a seamless experience on all devices, from desktops to smartphones.
*   **smooth Scrolling:** Smooth navigation between sections for a polished user experience.
*   **📬 Contact Form:** Integrated with Formspree for easy and reliable message handling.
*   **SEO Optimized:** Includes comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data for enhanced search engine visibility.

---

## 🛠️ Technologies Used

This project is built with web fundamentals and does not rely on any external frameworks.

*   **HTML5:** For the structure and content.
*   **CSS3:** For custom styling, animations, and responsive design (using Flexbox and Grid).
*   **JavaScript (ES6+):** For all dynamic functionality, including:
    *   DOM Manipulation
    *   Theme Toggling
    *   Typing Animation
    *   Scroll Effects

---

## 🚀 Getting Started

To run this project locally, follow these simple steps.

### Prerequisites

You just need a modern web browser.

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3.  Open the `index.html` file in your favorite browser. You can do this by double-clicking the file or using a live server extension in your code editor (like Live Server for VS Code).

---

## 📂 File Structure

```
portfolio-3/
├── assets/
│   ├── Adeyemo_Ayodeji.pdf
│   └── profile_img.jpg
├── custom.css         # All custom styles for the portfolio
├── index.html         # Main HTML file
├── script.js          # All JavaScript logic
└── README.md          # You are here!
```

---

## 💡 Code Highlights

A few interesting code snippets from `script.js`:

### Theme Persistence

The theme state is saved to `localStorage` to ensure the user's choice persists across sessions.

```javascript
const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
```

### Typing Animation

A recursive function `type()` creates the typewriter effect. It handles both typing and deleting text, and cycles through a list of phrases.

```javascript
function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    // ... logic for deleting
  } else {
    // ... logic for typing
  }

  // ... logic for switching between phrases and setting speed

  setTimeout(type, speed);
}
```

---

## 📬 Contact

Ayodeji Adeyemo

*   **LinkedIn:** linkedin.com/in/ayodeji-adeyemo-940766aa/
*   **GitHub:** @ayoomidimeji
*   **Twitter:** @ayoomidimeji