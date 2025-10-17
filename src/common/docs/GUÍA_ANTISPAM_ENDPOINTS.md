# Guía de Políticas Anti-Spam y Protección de Endpoints

Las políticas anti-spam son esenciales para evitar explotación indebida de tus servicios, saturación de recursos y pérdida de calidad en la plataforma.

- Implementa rate limiting en las rutas sensibles para controlar el número de peticiones por IP o por usuario (ej.: express-rate-limit, NestJS ThrottlerModule).
- Verifica la autenticidad y procedencia de cada petición: bloquea bots y scraping automatizado usando captchas, análisis de headers y validaciones empresariales.
- Audita logs de peticiones para detectar patrones de uso anómalo y posibles abusos.
- Actualiza reglas y listas negras (blacklist) de IPs y usuarios que incurran en conductas sospechosas o violaciones de términos.
- Informa y educa a usuarios sobre límites, condiciones y el motivo detrás de restricciones en la plataforma.
- Mantén esta política activa y revisa periódicamente ante nuevos escenarios, tipos de ataques o evoluciones del backend.

La protección proactiva contra abuso garantiza disponibilidad, reputación y escalabilidad del backend Dropi.

