# Sistema de turnos de una clínica


## Home:

Presentación con información de la clínica
Botones de inicio de sesión y registro
info de servicios de la clínica
link de número y whatsapp
Header y footer

## Roles:

### Secretaría
Ver las citas de de los pacientes de hoy
Tareas pendientes
Pacientes en espera
Pagos pendientes
Nuevos pacientes
Ver documentos que los doctores suban
Modificar/agendar/cancelar una cita de un paciente
Que pueda ver los datos y obra social de cada paciente
Ver los pagos pendientes de todos los pacientes y que pueda confirmar el pago

### Doctores
Pueda dar un aviso/alerta a secretaría para poder modificar/eliminar un turno
subir documentos (que se vea como un título, descripción, asignar a un usuario para que lo pueda descargar y botón de descarga)

### Usuario
Pueda iniciar sesión (dni y contraseña)
Registro (dni, email, contraseña, número, nombre completo)
Agendar/cancelar ver sus turnos
Ver los documentos que solo estén asignados a el
Poder tener una sección de perfil (nombre, datos, y que pueda subir su obra social)
Ver sus pagos pendientes


## Tareas para el Backend
Autenticación y Gestión de Usuarios

Registro de usuarios: Endpoint para registrar nuevos usuarios (dni, email, contraseña, número, nombre completo).

Inicio de sesión: Endpoint de autenticación utilizando dni y contraseña.

Roles y permisos: Gestión de roles (Secretaría, Doctores, Usuario) y validación de permisos para cada operación.

Gestión de Citas (Turnos)

Crear, modificar y cancelar turnos: Endpoints para que los usuarios puedan agendar y cancelar citas.

Visualización para Secretaría: Endpoint que liste las citas del día, pacientes en espera y tareas pendientes.

Alertas de los Doctores: Implementar una funcionalidad para que los doctores puedan enviar avisos a la secretaría para modificar o eliminar turnos.

Gestión de Pacientes y Datos Asociados

CRUD de Pacientes: Incluir endpoints para visualizar y actualizar datos de los pacientes, incluyendo información de la obra social.

Visualización de historial: Endpoint para que la secretaría pueda ver el historial de citas y datos relevantes de cada paciente.

Gestión de Pagos

Pagos pendientes: Endpoint para listar los pagos pendientes de cada paciente y confirmar su estado.

Registro de pagos: Funcionalidad para actualizar y confirmar pagos realizados.

Gestión de Documentos

Subida de documentos (Doctores): Endpoint para que los doctores puedan subir documentos asociados a un título, descripción y asignar el documento a un usuario específico.

Descarga de documentos (Usuarios): Endpoint que permita a los usuarios descargar únicamente los documentos que les hayan sido asignados.

Listado de documentos (Secretaría): Endpoint para que la secretaría pueda ver todos los documentos subidos por los doctores.

Notificaciones y Alertas

Alertas internas: Sistema para notificar a la secretaría cuando un doctor solicite modificar o eliminar un turno.

Seguridad y Validaciones

Validación de datos: Asegurar que se validen todos los campos en cada solicitud.

Protección de endpoints: Implementar middleware de autenticación y autorización para proteger cada endpoint según el rol.

Integraciones y Servicios Externos

Integración con servicios de mensajería: Configuración para notificaciones vía WhatsApp o llamadas telefónicas, si fuera necesario.

## Tareas para el Frontend
Diseño y Maquetación General

Home:

Presentación de la clínica con información relevante.

Botones de inicio de sesión y registro.

Información sobre los servicios de la clínica.

Enlaces al número telefónico y WhatsApp.

Inclusión de header y footer consistentes en todas las páginas.

Autenticación y Registro

Página de Registro: Formulario para registrar usuarios con campos: dni, email, contraseña, número, nombre completo.

Página de Inicio de Sesión: Formulario de login usando dni y contraseña.

Dashboard según Rol

Secretaría:

Panel principal con visualización de las citas del día.

Sección de tareas pendientes, lista de pacientes en espera y nuevos pacientes.

Visualización y gestión de pagos pendientes, con opción para confirmar pago.

Sección para ver documentos subidos por los doctores.

Funcionalidad para modificar, agendar o cancelar citas.

Visualización de datos completos de cada paciente (incluyendo obra social).

Doctores:

Panel para enviar avisos/alertas a la secretaría sobre turnos.

Interfaz para subir documentos: formulario con título, descripción, selección de usuario asignado y botón para subir/descargar el archivo.

Usuario:

Panel para agendar y cancelar turnos, con visualización de sus citas programadas.

Sección para ver y descargar documentos asignados únicamente a él.

Perfil de usuario donde pueda ver y actualizar sus datos personales, incluyendo la carga de su obra social.

Visualización de sus pagos pendientes.

Interacción y Usabilidad

Validación de formularios: Uso de validaciones en el cliente para asegurar el ingreso correcto de datos.

Feedback al usuario: Notificaciones o mensajes de confirmación ante la realización de acciones (registro, agendar/cancelar turno, subida de documentos, confirmación de pago).

Integración con el Backend

Consumo de API: Configuración de servicios o librerías para la comunicación con los endpoints del backend (autenticación, gestión de citas, pagos, documentos, etc.).

Gestión de estados: Uso de un gestor de estado (como Redux, Context API o similar) para manejar la sesión y los datos del usuario según el rol.

Responsividad y Accesibilidad

Diseño responsivo: Asegurarse de que el sistema sea completamente funcional en dispositivos móviles y de escritorio.

Buenas prácticas de accesibilidad: Implementar estándares para que el sitio sea accesible para todos los usuarios.

