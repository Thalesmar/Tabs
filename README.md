# Simple Tabs Component

A beginner-friendly project showcasing how to build a **simple tabs UI component** using **HTML**, **CSS**, and **JavaScript**.

---

## Project Overview

This project implements a basic tabs interface—commonly used to switch between different sections of content on a single page.

Each tab:
- Is represented by a button,
- Has its own corresponding content area,
- And initializes with the **first tab active by default**.

Clicking a different tab:
- Hides the currently displayed content,
- Shows the content for the selected tab,
- Updates the active tab visually.

This exercise is designed to help you practice **DOM manipulation**, **event handling**, and **conditional rendering** in JavaScript.

---

## Project Details

- **Technologies used**:
  - HTML for structure
  - CSS for styling and state indication
  - JavaScript for query selection and interactive behavior

- **Features**:
  - Dynamically show and hide content based on user clicks
  - Visual indication of active tab
  - Clear separation between markup, styling, and logic

- **Why build this?**  
  It’s a great way to reinforce core front-end development fundamentals:
  - `querySelectorAll`, `addEventListener`, and `classList` usage
  - Dynamic content control via JavaScript
  - Linking UI components with their content using attributes like `data-tab`

---

## Roadmap Reference

This project is inspired by the "Tabs" challenge from **roadmap.sh**, which outlines the requirements and learning objectives for this exact component:  
[Create a simple tabs component using HTML, CSS, and JavaScript – Roadmap.sh Projects](https://roadmap.sh/projects/simple-tabs) :contentReference[oaicite:0]{index=0}

---

## Usage Instructions

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Thalesmar/Tabs.git
   cd Tabs
````

2. **Open `index.html`** in your browser to view the tabs component.

3. **Customize & Learn**

   * Modify existing tabs or add new ones.
   * Tweak styles in `style.css` to change appearance or layouts.
   * Update logic in `index.js` to experiment with different interaction patterns.

---

## File Structure

```
Tabs/
├── index.html   — Contains the basic markup for tabs and content sections.
├── style.css    — Defines default and active styles for tabs and content.
└── index.js     — Implements the logic for toggling content on tab clicks.
```

---

## Tips to Extend the Project

* Use the `data-tab` attribute and `e.target` in JavaScript to dynamically link buttons to content:

  ```js
  const tabNumber = e.target.dataset.tab;
  document.getElementById(`tab-${tabNumber}`).style.display = "block";
  ```
* Opt for adding/removing `.active` classes instead of manipulating `display` inline.
* Make it more accessible—use ARIA attributes or keyboard navigation.
* Add smooth animations (e.g., fade-in/out transitions) with CSS for a polished look.

---

## Contribution

Contributions are welcome!
Feel free to open issues for bugs or suggestions, or submit a pull request to extend the component. Let’s build together!

---

## License

This project is open for educational and personal use.

---

Happy coding—and may your tabs always be responsive!
