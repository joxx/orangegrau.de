/**
 * Selects the navigation button using the data attribute 'data-nav-button'.
 * @type {HTMLElement}
 */
const navButton = document.querySelector('[data-nav-button]');

/**
 * Adds a click event listener to the navigation button.
 * When the button is clicked, it toggles the 'aria-expanded' attribute and the visibility of the associated menu.
 */
navButton.addEventListener('click', function() {
  /**
   * Gets the current state of the 'aria-expanded' attribute, defaulting to false if it's not set.
   * @type {boolean}
   */
  let expanded = this.getAttribute('aria-expanded') === true || false;

  // Sets the 'aria-expanded' attribute to the opposite of its current state.
  this.setAttribute('aria-expanded', (!expanded).toString());

  /**
   * Selects the next sibling element of the button, assumed to be the associated menu.
   * @type {HTMLElement}
   */
  let menu = this.nextElementSibling;

  // Toggles the visibility of the menu.
  menu.hidden = !menu.hidden;
});
