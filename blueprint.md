# Lotto Generator Blueprint

## Overview
A modern, visually appealing Lotto number generator web application. It follows the standard 6/45 format commonly used in Korea. The application focuses on a clean user experience with animations and polished aesthetics.

## Project Outline
- **Type:** Web Application (HTML/CSS/JS)
- **Style:** Modern, Minimalist, Colorful (Lotto colors)
- **Features:**
    - Random number generation (6 unique numbers from 1-45).
    - Color-coded balls based on number ranges.
    - Smooth animations for number reveal.
    - Responsive design for mobile and desktop.

## Current Plan: Initial Implementation
1.  **Setup Structure (`index.html`):**
    -   Header/Title.
    -   Container for the lottery balls.
    -   Action button ("Generate Number").
2.  **Styling (`style.css`):**
    -   Use a dark/gradient background for contrast.
    -   Style balls to look 3D (gradients, shadows).
    -   Define specific colors for number ranges:
        -   1-10: Yellow
        -   11-20: Blue
        -   21-30: Red
        -   31-40: Gray
        -   41-45: Green
    -   Add animations for appearing/bouncing.
3.  **Logic (`main.js`):**
    -   Function to generate 6 unique random integers between 1 and 45.
    -   Sort numbers in ascending order.
    -   Function to map numbers to CSS classes/colors.
    -   Event listener for the button to trigger generation and animation.
