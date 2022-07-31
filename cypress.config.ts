import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        supportFile: false,
        specPattern: './src/cypress/e2e/*.cy.ts'
    },
    video: false
});
