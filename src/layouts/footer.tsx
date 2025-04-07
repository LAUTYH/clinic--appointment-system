import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">MediClinic</h3>
                    <p className="text-gray-600">Cuidando de su salud con profesionalismo y dedicación.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                    <ul className="space-y-2">
                        <li>
                        <a className="text-gray-600 hover:text-primary transition-colors" href="/">Inicio</a>
                        </li>
                        <li>
                            <a className="text-gray-600 hover:text-primary transition-colors" href="/services">Servicios</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-primary transition-colors" href="/contact">Contacto</a>
                                </li>
                                </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Servicios</h3>
                                    <ul className="space-y-2">
                                        <li className="text-gray-600">Consultas Médicas</li>
                                        <li className="text-gray-600">Especialidades</li>
                                        <li className="text-gray-600">Emergencias</li>
                                        </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                                            <ul className="space-y-2">
                                                <li className="text-gray-600">Teléfono: (123) 456-7890</li>
                                                <li className="text-gray-600">Email: info@mediclinic.com</li>
                                                <li className="text-gray-600">Dirección: Av. Principal 123</li>
                                                </ul></div></div><div className="border-t mt-8 pt-8 text-center text-gray-600"><p>© 2025 MediClinic. Todos los derechos reservados.</p></div></div></footer>
  )
}

export default Footer