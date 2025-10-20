import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import HomeHighlights from '../components/HomeHighlights';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div data-reveal data-reveal-from="bottom" data-reveal-stagger>
        <HomeHighlights />
      </div>
      <div data-reveal data-reveal-from="bottom" data-reveal-delay="160">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join us in creating innovative solutions for sustainable development
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link 
                  to="/partnerships"
                  className="btn-primary px-8 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-utavu-purple to-utavu-green hover:from-utavu-purple-dark hover:to-utavu-green-dark"
                >
                  Partner with Us
                </Link>
                <Link 
                  to="/focus-areas"
                  className="btn-secondary px-8 py-3 text-lg font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;