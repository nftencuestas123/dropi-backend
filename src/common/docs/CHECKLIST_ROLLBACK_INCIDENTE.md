# Checklist y Guía de Rollback ante Incidentes

El rollback, o reversión de cambios, es la herramienta clave para mantener la integridad y continuidad empresarial cuando una actualización o despliegue falla.

- Antes de cualquier rollback, verifica que tienes backup completo y reciente del sistema, base de datos y archivos clave.
- Documenta los cambios que causaron el incidente: identifica la versión exacta, fecha y responsables.
- Comunica a todo el equipo técnico, comercial y a los interesados del negocio, informando que se va a realizar una reversión.
- Ejecuta la reversión de manera controlada: usa Git para deshacer cambios en código y scripts de restauración para bases de datos.
- Monitoriza logs, errores y rendimiento tras el rollback; revisa que todas las funciones críticas estén operativas.
- Investiga la causa raíz del incidente y registra la lección aprendida para evitar repeticiones futuras.
- Actualiza este checklist cada vez que mejores el proceso, o enfrentes nuevos escenarios técnicos.

Un rollback correcto minimiza daños, protege la empresa y refuerza la confianza del equipo y de los clientes.

