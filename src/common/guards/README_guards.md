# Guía de Guards (Controles de Acceso)

Los guards son el primer filtro de defensa ante accesos no autorizados, fraudes o acciones peligrosas en tu backend.

- Usa guards personalizados para validar JWT, roles, scopes y reglas empresariales antes de cualquier lógica de ruta.
- Implementa un AuthGuard global en src/auth/guards/jwt-auth.guard.ts para proteger los módulos críticos y endpoints sensibles.
- Siempre documenta qué endpoints requieren qué guard y bajo qué condiciones.
- Antes de exponer un nuevo endpoint, revisa desde el equipo de seguridad que cuenta con guard(s) apropiados: reduce drásticamente la superficie de ataque.
- Puedes combinar guards (por rol, por nivel de usuario, por endpoint, por estado del negocio) usando los decoradores de NestJS.

Expande, revisa y mantén esta carpeta/guía como parte central de la estrategia anti-hacker.

