import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Admin from '../components/admin';

export default function Home() {
    return (
        <div className="p-2">
            <Head>
                <title>El Afrhani Saad - Admin Page</title>
                <meta name="description" content="Admin dashboard for managing projects and experiences" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="max-w-7xl mx-auto">
                <Navbar />
                <div className="py-5">
                    <Admin />
                </div>
            </div>
        </div>
    );
}
