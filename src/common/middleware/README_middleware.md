# Guía de Middleware Empresarial

Los middleware son fundamentales para interceptar solicitudes, controlar CORS, registrar actividad, aplicar filtros de seguridad, rate limiting y monitorear el flujo de datos entre cliente y backend.

- Implementa logger global para auditar cada petición y respuesta. No solo por seguridad: ayuda a detectar anomalías, bugs y actividades sospechosas.
- Configura correctamente CORS para permitir solo los orígenes legítimos y bloquear ataques de terceros o bots.
- Usa interceptores de NestJS y middlewares custom para medir rendimiento, estadísticas y uso de endpoints, facilitando decisiones empresariales.
- Antes de lanzar un feature, valida que los middlewares protegen y auditan todos los endpoints críticos.

Esta carpeta debe crecer con tus necesidades de protección, auditoría y performance. Es tu “muro invisible” contra ataques y tu registro de actividad empresarial.

