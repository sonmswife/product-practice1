# Lotto Generator Project Blueprint

## Project Overview
A modern, web-based Lotto 6/45 generator that provides a visually appealing and interactive user experience. It features dynamic ball animations and a responsive design.

## Features
- **Dynamic Lotto Number Generation**: Generates 6 random numbers between 1 and 45.
- **Ball Animations**: Balls appear with a "pop-in" effect and specific colors based on the number range.
- **Modern UI**: Clean layout, responsive design, and visually distinct ball styling.
- **Theme Support**: (Planned) Dark and Light mode toggle.

## Technical Stack
- HTML5
- CSS3 (Baseline features: CSS Variables, Flexbox, Animations)
- JavaScript (ES Modules)

## Current Task: Theme Support (Dark/Light Mode)

### Plan
1.  **CSS Variables Refactoring**: Update `style.css` to define both light and dark theme variable sets.
2.  **Theme Toggle UI**: Add a theme switch button in `index.html`.
3.  **JavaScript Logic**: Implement theme switching in `main.js` using a class on the `body` or `html` tag.
4.  **Persistence**: Save the theme preference in `localStorage`.
5.  **Deployment**: Push the changes to the remote repository.

### Steps
- [x] Refactor `style.css` with theme-aware variables.
- [x] Add theme toggle button to `index.html`.
- [x] Add theme switching logic to `main.js`.
- [x] Verify functionality in the preview.
- [x] Git push to deploy.
