# Lotto Generator Project Blueprint

## Project Overview
A modern, web-based Lotto 6/45 generator that provides a visually appealing and interactive user experience. It features dynamic ball animations and a responsive design.

## Features
- **Dynamic Lotto Number Generation**: Generates 6 random numbers between 1 and 45.
- **Ball Animations**: Balls appear with a "pop-in" effect and specific colors based on the number range.
- **Modern UI**: Clean layout, responsive design, and visually distinct ball styling.
- **Theme Support**: Dark and Light mode toggle.
- **Partnership Inquiry Form**: A simple form powered by Formspree to receive partnership inquiries.

## Technical Stack
- HTML5
- CSS3 (Baseline features: CSS Variables, Flexbox, Animations)
- JavaScript (ES Modules)
- Formspree (Form Handling)

## Current Task: Partnership Inquiry Form (Completed)

### Plan
1.  **HTML Structure**: Add a `section` for the partnership form in `index.html`.
2.  **Formspree Integration**: Use the endpoint `https://formspree.io/f/mreypqpr`.
3.  **Modern Styling**: Apply consistent styling in `style.css` for inputs and buttons, supporting both dark and light modes.
4.  **Validation & Feedback**: Use native HTML5 validation and Formspree's redirect/success handling.

### Steps
- [x] Refactor `style.css` with theme-aware variables.
- [x] Add theme toggle button to `index.html`.
- [x] Add theme switching logic to `main.js`.
- [x] Add partnership form to `index.html`.
- [x] Style the partnership form in `style.css`.
- [x] Verify functionality.
