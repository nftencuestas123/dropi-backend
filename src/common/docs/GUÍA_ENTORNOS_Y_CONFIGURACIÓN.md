# Guía de Gestión de Entornos y Configuraciones

Manejar correctamente distintas configuraciones para cada entorno (local, dev, staging, prod) es vital para la seguridad, estabilidad y usabilidad.

- Usa archivos `.env` específicos para cada entorno (`.env.development`, `.env.production`, etc) con variables sensibles externas.
- Configura `ConfigModule` de NestJS para cargar dinámicamente la configuración según el entorno activo.
- Nunca subas claves o passwords reales a repositorios públicos. Usa secretos y servicios de gestión (HashiCorp Vault, AWS Secrets Manager).
- Mantén variables como URLs, puertos, claves JWT, claves de servicios externos y flags de debug según entorno.
- Documenta y actualiza este archivo cuando agregues un nuevo entorno o cambies variables críticas.
- Realiza pruebas de integración y funcionalidad completas en cada ambiente para evitar fallos en producción.
- Genera scripts para facilitar cambiar y desplegar configuraciones seguras según el servicio cloud o infraestructura.

Esta buena práctica protege tus sistemas y datos, da transparencia a la gestión de equipos y reduce problemas al migrar o desplegar.

