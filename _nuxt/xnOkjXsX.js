// Placeholder JavaScript file for Office 365 Retail Store
window.addEventListener('DOMContentLoaded', () => {
  // Initialize the app
  const app = {
    init() {
      console.log('Office 365 Retail Store app initialized');
      this.replaceNuxtPlaceholder();
    },
    
    replaceNuxtPlaceholder() {
      // Replace the loading message with a successful message
      const nuxtElement = document.getElementById('__nuxt');
      if (nuxtElement) {
        nuxtElement.innerHTML = `
          <div style="padding: 2rem; text-align: center;">
            <h1>Office 365 Retail Store</h1>
            <p>JavaScript loaded successfully!</p>
            <p>This is a static placeholder site. The dynamic Nuxt.js app functionality is not available in this demo.</p>
            <p><a href="./index.html" style="color: #0078d4;">Return to home page</a></p>
          </div>
        `;
      }
    }
  };
  
  // Start the app
  app.init();
}); 