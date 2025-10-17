# Guía de Control de Versiones (API y Releases)

El versionado claro y documentado de API y releases permite integraciones estables, rollback seguros y transparencia frente a clientes y partners.

- Define y comunica un esquema de versionado: ej. v1, v2, v1.1 (semver o versiones mayores por ruptura).
- Todo cambio que rompa compatibilidad (breaking change) debe llevar incremento de versión mayor; mejoras menores y fixes, versión menor/patch.
- Mantén endpoint/version en la ruta base: ej. /api/v1/usuarios o /api/v2/productos.
- Registra en este archivo cada cambio, fecha, responsable y motivo (changelog breve, ejemplo abajo).
- Comunica de antemano a partners, equipos o clientes antes de deprecar o eliminar endpoints antiguos.
- Conserva documentación Swagger/API actualizada por versión y exporta doc histórica cuando cambie el core empresarial.

## Ejemplo mínimo de changelog
---
- 2025-10-17  v1 Initial release: usuarios, auth, productos, crm.
- 2026-01-05  v2 Añadido soporte multi-tienda, validación 2FA, mejoras en CRM.
---

La disciplina del versionado y changelog potencia la confianza y eficiencia de todo equipo técnico y comercial.

