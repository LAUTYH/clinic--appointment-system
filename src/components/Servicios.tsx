import React from 'react'

const Services = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
                    <p className="text-lg text-gray-600">Ofrecemos una amplia gama de servicios médicos para cuidar de su salud</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" alt="Consultas Médicas" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultas Médicas</h3>
                                <p className="text-gray-600">Atención personalizada con profesionales especializados</p>
                            </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" alt="Especialidades" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Especialidades</h3>
                                <p className="text-gray-600">Diferentes áreas médicas para una atención integral</p>
                            </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" alt="Emergencias" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergencias</h3>
                                <p className="text-gray-600">Servicio de urgencias las 24 horas</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services