# Guía de Logging Centralizado para Backend

El logging detallado y centralizado es vital para detectar fallos, realizar auditorías, medir salud del sistema y cumplir con normativas.

- Usa librerías robustas como Winston o Morgan en NestJS para capturar logs de accesos, errores, y eventos críticos.
- Configura niveles de log (info, warn, error, debug) para filtrar según entorno (desarrollo, staging, producción).
- Centraliza el almacenamiento de logs en servicios como ElasticSearch, Datadog, Loggly o cualquier solución cloud que permita búsquedas y alertas.
- Incluye pistas de contexto: IDs de usuario, request ids, timestamps y metadatos del ambiente para una trazabilidad completa.
- Establece límites de retención y rotación para optimizar costos y performance.
- Documenta en este archivo la configuración, dependencias, formatos y pasos para revisar logs en la operación diaria.

Un sistema con buen logging es más confiable, fácil de mantener y seguro frente a auditorías legales o de calidad.

