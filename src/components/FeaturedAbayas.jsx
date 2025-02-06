import React from 'react'

    const abayas = [
      {
        id: 1,
        name: 'Elegant Black Abaya',
        price: 120,
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
      },
      {
        id: 2,
        name: 'Royal Blue Abaya',
        price: 150,
        image: 'https://images.unsplash.com/photo-1616594039631-b2d0b5f7b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
      },
      {
        id: 3,
        name: 'Rose Gold Abaya',
        price: 180,
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
      }
    ]

    export default function FeaturedAbayas() {
      return (
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Featured Abayas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {abayas.map(abaya => (
              <div key={abaya.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={abaya.image} alt={abaya.name} className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-text">{abaya.name}</h3>
                  <p className="text-secondary font-bold">${abaya.price}</p>
                  <button className="mt-4 w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )
    }
