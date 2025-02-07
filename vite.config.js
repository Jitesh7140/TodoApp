import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ 
    react(), 
    tailwindcss(), 

  ],
  server: {
    host: '192.168.0.100', // This makes Vite accessible on your local network
    port: 3000, // Aapka port, jo bhi aap use kar rahe hain (default 5173 hota hai)
  }
  
})
