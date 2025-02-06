import React from 'react'

    export default function HeroSection() {
      return (
        <section className="bg-gradient-to-r from-primary to-secondary py-24">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Elevate Your Style with Sabaya
            </h1>
            <p className="text-xl mb-8 text-accent">
              Discover our exclusive collection of modern abayas
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300">
              Shop the Collection
            </button>
          </div>
        </section>
      )
    }
