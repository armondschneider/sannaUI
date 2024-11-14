// button-base.js

// Create a function to initialize a base button with common properties and event handling
function createButtonBase(options = {}) {
    const button = document.createElement('button');
    
    // Apply default classes and attributes
    button.classList.add('base-button');
    button.textContent = options.text || 'Default Button';
    button.type = options.type || 'button';
  
    // Add event listeners if provided in options
    if (options.onClick) {
      button.addEventListener('click', options.onClick);
    }
  
    // Add additional attributes (e.g., data attributes, ARIA labels)
    if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
        button.setAttribute(key, value);
      }
    }
  
    return button;
  }
  
  // Example usage for testing or extending:
  const myButton = createButtonBase({
    text: 'Click Me',
    type: 'submit',
    onClick: () => alert('Button clicked!'),
    attributes: {
      'aria-label': 'Custom Button',
      'data-custom': 'example'
    }
  });
  
  // Append to the document for testing
  document.body.appendChild(myButton);
  
  // Export the function for reuse
  export { createButtonBase };