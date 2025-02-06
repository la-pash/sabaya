import React from 'react'

    export default function Location() {
      return (
        <section className="container mx-auto py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Our Location
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <iframe
              title="Sabaya Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509744292!2d55.27027841500926!3d25.19751498389645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4281e7878fd9%3A0x6e934c3edc4f07da!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1689876543210!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      )
    }
