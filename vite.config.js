import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        'home-care': resolve(process.cwd(), 'home-care.html'),
        'elderly-care': resolve(process.cwd(), 'elderly-care.html'),
        'nursing-care': resolve(process.cwd(), 'nursing-care.html'),
        'medical-equipment': resolve(process.cwd(), 'medical-equipment.html'),
        'emergency-care': resolve(process.cwd(), 'emergency-care.html'),
        physiotherapy: resolve(process.cwd(), 'physiotherapy.html')
      }
    }
  }
});
