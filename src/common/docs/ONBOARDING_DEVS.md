# Guía de Onboarding para Desarrolladores

Toda persona que se integre a Dropi Backend debe revisar, comprender y cumplir con estos puntos antes de tocar código:

- Lee todos los README y guías en src/common/docs, especialmente seguridad, licenciamiento y pruebas.
- Nunca agregues dependencias sin informar; revisa versiones y compatibilidad con Railway/Cloud.
- Crea un branch para cada tarea y solicita merge solo tras pasar todas las pruebas y checklist de despliegue.
- Usa DTOs, Guards y Middlewares de la carpeta común; mantén validación, logging y protección activos en rutas nuevas.
- Documenta todo endpoint, DTO y clase exportada con JSDoc y/o Swagger decorators.
- Nunca subas variables privadas, credenciales ni dump de base de datos; usa los mecanismos seguros indicados.
- Si ves un bug, vulnerabilidad o dato sensible, comunícalo al equipo siguiendo los canales definidos.
- Actualiza estos lineamientos tras cada aprendizaje, incidente o mejora relevante.

El éxito operativo y la imagen empresarial del backend dependen de que cada desarrollador respete la cultura de calidad y seguridad.

