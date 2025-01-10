// button-base.js

/**
 * Function to create a base button with customizable options.
 * @param {Object} options - Configuration options for the button.
 * @param {string} options.text - The text content of the button.
 * @param {string} options.type - The button type (e.g., 'button', 'submit').
 * @param {function} options.onClick - Click event handler.
 * @param {Object} options.attributes - Additional attributes to add to the button.
 * @param {Array<string>} options.classes - Additional CSS classes to apply.
 * @returns {HTMLButtonElement} - The generated button element.
 */
function createButtonBase(options = {}) {
  const button = document.createElement('button');

  // Apply default classes
  button.classList.add('base-button');

  // Add custom classes if provided
  if (options.classes) {
      options.classes.forEach(className => button.classList.add(className));
  }

  // Set button text
  button.textContent = options.text || 'Default Button';

  // Set button type
  button.type = options.type || 'button';

  // Add event listener if provided
  if (options.onClick) {
      button.addEventListener('click', options.onClick);
  }

  // Add additional attributes (e.g., ARIA labels, data attributes)
  if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
          button.setAttribute(key, value);
      }
  }

  return button;
}

// Example usage for testing
document.addEventListener('DOMContentLoaded', () => {
  const myButton = createButtonBase({
      text: 'Click Me',
      type: 'submit',
      classes: ['bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'hover:bg-blue-700'],
      onClick: () => alert('Button clicked!'),
      attributes: {
          'aria-label': 'Custom Button',
          'data-custom': 'example'
      }
  });

  // Append the button to the body for testing
  document.body.appendChild(myButton);
});

// Export the function for reuse
export { createButtonBase };