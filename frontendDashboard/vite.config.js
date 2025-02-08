import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Change this to 'es2015' for wider browser support
  },
  server: {
    host: true, // Ensures it runs on all network interfaces
    strictPort: true,
  },
});
