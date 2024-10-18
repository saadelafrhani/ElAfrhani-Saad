import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="p-2">
      <Head>
        <title>El Afrhani Saad - Software Developer</title>
        <meta
          name="description"
          content="Full-stack Development Student with 2 years of focused learning in both front-end and 
          back-end technologies. Passionate about creating responsive web applications using HTML5,
           CSS3, JavaScript, React.js. Gaining skills in back-end technologies such as PHP, Python,
            and MySQL through academic projects and personal learning." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Navbar />
        <div className="py-24">
          <Hero />
        </div>
        <Footer />
      </div>
    </div>
  )
}
