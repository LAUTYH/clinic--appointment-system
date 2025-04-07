import React from 'react'

const Contact = () => {
    return (
        <section className="bg-primary/5 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Contáctenos</h2>
                    <p className="text-lg text-gray-600">Estamos aquí para ayudarle. No dude en contactarnos.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img className="rounded-lg shadow-xl" alt="Contact" src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
                            <p className="text-gray-600">Av. Principal 123, Ciudad</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                            <p className="text-gray-600">(123) 456-7890</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <p className="text-gray-600">info@mediclinic.com</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Horario</h3>
                            <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 8:00 PM</p>
                            <p className="text-gray-600">Sábados: 8:00 AM - 2:00 PM</p>
                        </div>
                        <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full">
                            Contactar por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact