import Head from 'next/head';
import Navbar from '../components/Navbar';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="p-2">
            <Head>
                <title>EL Afrhani Saad - Software Developer</title>
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
                <div className="pb-56">
                    <Blogs />
                </div>
                <Footer />
            </div>
        </div>
    );
}
