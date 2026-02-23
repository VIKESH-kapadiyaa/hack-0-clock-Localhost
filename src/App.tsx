import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandsMarquee from './components/BrandsMarquee';
import Features from './components/Features';
import Footer from './components/Footer';
import GlobalChatbot from './components/GlobalChatbot';

function Home() {
  return (
    <>
      <Hero />
      <BrandsMarquee />
      <Features />
    </>
  );
}

function MockPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 max-w-lg">
        This is a functional mock page demonstrating routing. The Localcollab UI remains consistent.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans antialiased flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<MockPage title="Platform Overview" />} />
            <Route path="/brands" element={<MockPage title="For Brands" />} />
            <Route path="/publishers" element={<MockPage title="For Publishers" />} />
            <Route path="/partner" element={<MockPage title="Partner With Us" />} />
            <Route path="/insights" element={<MockPage title="Insights & Resources" />} />
            <Route path="/login" element={<MockPage title="Sign In" />} />
          </Routes>
        </main>

        <Footer />
        <GlobalChatbot />
      </div>
    </Router>
  );
}

export default App;
