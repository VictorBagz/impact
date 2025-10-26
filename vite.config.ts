import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Add this - it's required for React
  base: '/newImpact/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});