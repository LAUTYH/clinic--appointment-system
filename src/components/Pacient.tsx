import React from 'react'

const Pacient = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Mi Panel</h1>
                <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Mis Turnos</h2>
                    <div className="overflow-x-auto"><table className="w-full">
                        <thead>
                            <tr className="border-b"><th className="text-left py-3 px-4">Doctor</th>
                                <th className="text-left py-3 px-4">Fecha</th>
                                <th className="text-left py-3 px-4">Hora</th>
                                <th className="text-left py-3 px-4">Estado</th>
                                <th className="text-left py-3 px-4">Acciones</th>
                            </tr></thead><tbody><tr className="border-b">
                                <td className="py-3 px-4">Dr. González</td>
                                <td className="py-3 px-4">2023-10-15</td>
                                <td className="py-3 px-4">09:00</td>
                                <td className="py-3 px-4">
                                    <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">Programado</span>
                                </td>
                                <td className="py-3 px-4">
                                    <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3">
                                        Cancelar
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-b"><td className="py-3 px-4">Dra. Rodríguez</td>
                                <td className="py-3 px-4">2023-10-20</td>
                                <td className="py-3 px-4">15:30</td>
                                <td className="py-3 px-4">
                                    <span className="px-2 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">Pendiente</span>
                                </td>
                                <td className="py-3 px-4">
                                    <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3">
                                        Cancelar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="mt-4">
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            Agendar Nuevo Turno
                        </button>
                    </div>
                </section>
                <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Mis Documentos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium">Resultados Análisis</h3>
                                    <p className="text-sm text-gray-600">Fecha: 2023-10-10</p>
                                    <p className="text-sm text-gray-600">Tipo: PDF</p>
                                </div>
                                <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                    Descargar
                                </button>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium">Receta Médica</h3>
                                    <p className="text-sm text-gray-600">Fecha: 2023-10-12</p>
                                    <p className="text-sm text-gray-600">Tipo: PDF</p>
                                </div>
                                <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                    Descargar
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold mb-3">Mi Perfil</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                                <input type="text" className="mt-1 block w-full px-3 py-2 border rounded-md" value="Juan Pérez" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" className="mt-1 block w-full px-3 py-2 border rounded-md" value="juan@email.com" />
                            </div>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                                Actualizar Datos
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-lg font-semibold mb-3">Pagos Pendientes</h3>
                        <div className="space-y-4">
                            <div className="border-b pb-4">
                                <p className="font-medium">Consulta Dr. González</p>
                                <p className="text-sm text-gray-600">Fecha: 15/10/2023</p>
                                <p className="text-lg font-semibold text-primary mt-2">$5000</p>
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-2">Pagar
                                </button>
                            </div>
                            <div className="border-b pb-4">
                                <p className="font-medium">Consulta Dra. Rodríguez</p>
                                <p className="text-sm text-gray-600">Fecha: 20/10/2023</p>
                                <p className="text-lg font-semibold text-primary mt-2">$5000</p>
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-2">
                                    Pagar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Pacient