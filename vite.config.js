import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.VITE_PORT) || 5174,
    strictPort: false,
    // Allow sharing via ngrok (and similar tunnels)
    allowedHosts: ['.ngrok-free.dev', '.ngrok.io', '.ngrok.app'],
  },
});
