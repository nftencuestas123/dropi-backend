# Checklist y Guía de Migración de Base de Datos

Las migraciones son esenciales para evolucionar tu sistema sin perder datos ni comprometer la integridad.  
Sigue y adapta este checklist en cada cambio estructural de tu base de datos:

- Antes de toda migración, realiza y valida un backup completo de la base (usa pg_dump, Railway backup o herramienta de tu proveedor).
- Documenta la versión de esquema original y el objetivo de la migración (nueva tabla, columna, índice, trigger, etc).
- Ejecuta scripts de migración primero en ambiente de staging/testing y valida resultados:  
  - Integridad de datos
  - Performance
  - Correcta replicación y failover (si aplica)
- Usa migradores automáticos y versionados (ej: TypeORM Migration CLI, Sequelize CLI, Prisma Migrate) para asegurar reversibilidad.
- Si la migración falla o impacta performance, ejecuta rollback inmediato y comunica al equipo.
- Siempre documenta el resultado, performance y todo cambio relevante en este archivo, dejando evidencia para auditoría futura.
- Antes de lanzar en producción, revisa compatibilidad con todos los módulos y endpoints afectados.

La disciplina en migraciones protege tu negocio, la confianza de tus clientes y la evolución constante del sistema.  
Actualiza y expande esta guía tras cada experiencia relevante.

