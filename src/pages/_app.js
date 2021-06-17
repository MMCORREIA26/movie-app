import Head from 'next/head'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css'

function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
    );
};

export default MyApp
