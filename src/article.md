---
layout: base.njk
title: orangegrau website wip
description: orangegrau work in progress
---

Creating a simple, CSS-only accordion with the details and summary HTML elements is not only efficient but also makes for a clean, manageable, and accessible UI component. Below, i will outline how to create a CSS-only accordion and then how to enhance it using JavaScript to ensure only one accordion item is open at a time.

HTML:

Use the **details** tag to create the accordion, and the **summary** tag to define the clickable title.

```HTML
<details class="accordion-item" open>
  <summary class="accordion-header">Accordion Item 1</summary>
  <div class="accordion-content">
    Content for item 1 goes here...
  </div>
</details>

<details class="accordion-item">
  <summary class="accordion-header">Accordion Item 2</summary>
  <div class="accordion-content">
    Content for item 2 goes here...
  </div>
</details>

<details class="accordion-item">
  <summary class="accordion-header">Accordion Item 3</summary>
  <div class="accordion-content">
    Content for item 3 goes here...
  </div>
</details>

<details class="accordion-item">
  <summary class="accordion-header">Accordion Item 4</summary>
  <div class="accordion-content">
    Content for item 4 goes here...
  </div>
</details>
```

CSS:

Define some basic styles for the accordion, using CSS.

```CSS
.accordion-item {
border: 1px solid #ccc;
margin-bottom: .5rem;
}

.accordion-header {
background-color: #f5f5f5;
cursor: pointer;
padding: .5rem;
font-weight: 500;
}

.accordion-content {
display: none;
padding: .5rem;
}

.accordion-item[open] .accordion-content {
display: block;
}
```
The **cursor: pointer;** style makes it clear that the title is clickable.

JavaScript:

To enhance the accordion functionality and allow only one item to be open at a time, you can use JavaScript. Here's an example of how to achieve this:

```javascript
document.querySelectorAll('.accordion-item').forEach((accordion) => {
accordion.addEventListener('toggle', function() {
if (this.open) {
document.querySelectorAll('.accordion-item').forEach((otherAccordion) => {
if (otherAccordion !== this) otherAccordion.removeAttribute('open');
});
}
});
});
```

## Conclusion

By using the details and summary tags along with some basic CSS and JavaScript, you can create a simple and accessible accordion without relying on bulky libraries or frameworks. This method makes it easier to maintain and is more performant, leading to better user experiences. Have fun experimenting and enhancing your accordion with different styles and functionalities!