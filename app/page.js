import Footer from "@/components/footer/Footer";
import MenCollection from "@/components/home/collection/MenCollection";
import Hero from "@/components/home/hero/Hero";
import Navbar from "@/components/navbar/Navbar";


export default function Home() {
//   const { createProxyMiddleware } = require('http-proxy-middleware');
// const express = require('express');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // Proxy configuration
//   server.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://api.timbu.cloud',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': '',
//       },
//     })
//   );

//   server.all('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(3000, (err) => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:3000');
//   });
// });

  return (
    <div>
      <Navbar />
      <Hero />
      <MenCollection  />
      <Footer />
    </div>
  );
}
