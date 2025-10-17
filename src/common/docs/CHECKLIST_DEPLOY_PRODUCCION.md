# Checklist para Despliegue a Producción

Este checklist debe ser revisado y cumplido antes de lanzar cualquier versión nueva de Dropi Backend en entorno productivo o staging empresarial.

- Ejecuta todos los tests automatizados y revisa que no exista ningún test en rojo:  
  npm run test:e2e
- Verifica que la documentación Swagger está generada, actualizada y sin endpoints huérfanos.
- Revisa archivos de configuración (.env) y variables sensibles. No subas secretos, passwords ni configuraciones privadas al repo.
- Confirma que los middlewares críticos (logging, rate-limiting, guards y CORS) estén activos y probados en el entorno real.
- Valida backups y restauraciones automáticas en tu motor de base de datos (haz una restauración de prueba si es posible).
- Observa logs/monitorización durante el primer día: busca errores, advertencias y posibles picos inesperados.
- Informa a todo el equipo técnico y comercial sobre el despliegue, mostrando dónde consultar logs, docs y contactarse en caso de incidente.
- Mantén esta guía viva: actualiza cada vez que el proceso cambie o surja una lección tras un despliegue relevante.

El éxito de tu plataforma reside tanto en la innovación, como en la disciplina de tus procesos de despliegue y control.
