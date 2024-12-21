import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Calculator from "./components/Calculator";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      {/* Calculator Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See How Much You Can Save
            </h2>
            <p className="text-xl text-gray-600">
              Compare the cost of growing your newsletter through Pick and
              Partner vs traditional advertising
            </p>
          </div>
          <Calculator />
        </div>
      </section>
      <Features />

      <ContactSection />
    </div>
  );
}
