import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { Footer, Navbar } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attrinute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/f5c26d5a6e.js" crossorigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
