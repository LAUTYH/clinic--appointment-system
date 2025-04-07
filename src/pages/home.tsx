import React from 'react';
import Contact from '../components/Contact';
import Services from '../components/Servicios';
import Footer from '../layouts/footer';

const Home: React.FC = () => {
  return (
    <>
      <section className="bg-blue-50">
        <article className="flex flex-col bg-blue-50">
          <div className="flex-grow">
            {/* Aquí puedes agregar el contenido principal de la página */}
          </div>
        </article>

        <article className="relative bg-gradient-to-b from-primary/10 to-transparent py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Su salud es nuestra prioridad
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Brindamos atención médica de calidad con profesionales altamente calificados. Reserve su turno de manera fácil y rápida.
                </p>
                <div className="flex gap-4">
                  <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                    Reservar Turno
                  </button>
                  <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                    Nuestros Servicios
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  className="rounded-lg shadow-xl" 
                  alt="Medical team" 
                  src="https://images.unsplash.com/photo-1579684288452-b334934f845f" 
                />
              </div>
            </div>
          </div>
        </article>
        <Services />
        <Contact />
      </section>
    </>
  );
};

export default Home;
