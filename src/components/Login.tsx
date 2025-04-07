const Login = () => {
    return (
            <div className="min-h-[80vh] flex items-center justify-center px-4">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Iniciar Sesión</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">DNI</label>
                            <input type="text" id="dni" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" placeholder="Ingrese su DNI" value="" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" placeholder="Ingrese su contraseña" value="" />
                        </div>
                        <button className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full" type="submit">Ingresar</button>
                    </form>
                    <div className="mt-6 space-y-4">
                        <div className="border-t pt-4">
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Usuarios de prueba:</h3>
                            <div className="text-sm text-gray-600 space-y-1"><p>Secretaria: DNI: 11111111 - Contraseña: secretaria123</p>
                                <p>Doctor: DNI: 22222222 - Contraseña: doctor123</p>
                                <p>Paciente: DNI: 33333333 - Contraseña: paciente123</p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-600">¿No tiene una cuenta? <a className="text-primary hover:text-primary/80" href="/registerpage">Regístrese aquí</a></p>
                </div>
            </div>
    )
}

export default Login