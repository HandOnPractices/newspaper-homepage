# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript for mobile menu

### What I learned

This project helped me practice CSS Grid for complex layouts and responsive design. I learned how to create a responsive navigation menu that works well on both mobile and desktop screens.

Some code snippets I'm proud of:

```html
<picture>
  <source media="(min-width: 768px)" srcset="./assets/images/image-web-3-desktop.jpg">
  <img src="./assets/images/image-web-3-mobile.jpg" alt="Web 3.0 illustration">
</picture>
```

```css
.main-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
```

```js
navToggle.addEventListener('change', function() {
  if (this.checked) {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }
});
```

### Continued development

In future projects, I want to focus more on:
- Accessibility features
- Animation and transitions
- Performance optimization

### Useful resources

- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me understand CSS Grid layout.
- [Responsive Navigation Patterns](https://www.smashingmagazine.com/2017/05/responsive-navigation-patterns/) - Great article on creating responsive navigation menus.

## Author

- Website - [David Nanjila](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
