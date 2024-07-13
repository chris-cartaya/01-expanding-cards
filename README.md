# Expanding Cards

A simple project demonstrating expanding cards using HTML, CSS, and JavaScript. When a card is clicked, it expands to reveal more content, creating an engaging user experience.

## Table of Contents
- [Description](#description)
- [Modifications](#modifications)
- [Live Demo](#live-demo)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Project Timeline](#project-timeline)
- [To-Do](#to-do)
- [Credits](#credits)
- [License](#license)
- [Versioning](#versioning)

## Description

This project features a series of expanding cards styled with background images and headings. The layout is built using Flexbox, and JavaScript is utilized to add interactivity. When a card is clicked, it expands with a smooth CSS transition, revealing the heading inside the card.

The project was developed by following the first video in the Udemy course "50 Projects In 50 Days" by Brad Traversy and Florin Pop, titled "Day 1 - Expanding Cards". While closely following the tutorial, I made a few minor modifications to enhance semantics and responsiveness, which are detailed in the next section.


## Modifications

### HTML

- Used `<h2>` tags for the panel headings instead of `<h3>` tags for better semantics, as there should typically only be one `<h1>` on the page.

### CSS

- Added `*::before` and `*::after` to the universal selector for `box-sizing: border-box;` for better practice.
- Used `font-size: 100%;` in the body element to facilitate the use of relative font sizes (`rem`) for better scalability.
- Added `height: 100dvh;` to the body element to ensure proper centering on mobile devices.
- Used percentages (0% and 100%) for opacity values for better readability.

### JavaScript

- Added a comment to explain the use of `querySelectorAll` and the difference between NodeLists and HTMLCollections.


## Live Demo

Check out the live version of this project here:
[https://chris-cartaya.github.io/01-expanding-cards/](https://chris-cartaya.github.io/01-expanding-cards/)

## Screenshot

![Expanding Cards Screenshot](images/01-expanding-cards.png)

## Usage

Feel free to use this project as a reference for your own HTML and CSS projects or as a starting point for further modifications.

## Project Timeline

- **Start Date:** July 12, 2024
- **Completion Date:** July 12, 2024
- **Last Modified:** July 12, 2024

## To-Do

- [ ] Increase the opacity transition duration for text on mobile devices to prevent the text from looking like it’s falling down as the panel opens.

## Credits

- [50 Projects In 50 Days &ndash; Brad Traversy and Florin Pop](https://www.udemy.com/course/50-projects-50-days/?couponCode=LETSLEARNNOWPP)

## License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.

## Versioning

### Version 1.0.0
- Initial release.
