# Guía de DTOs (Data Transfer Objects)

Todos los datos de entrada y salida de los endpoints deben validarse siempre usando DTOs personalizados.  
Esto previene errores, fraudes y facilita el mantenimiento.

- Define cada DTO en su módulo respectivo (ej: src/usuarios/dto/create-usuario.dto.ts).
- Usa class-validator y class-transformer para todas las reglas de negocio (ej. isEmail, isInt, minLength, etc).
- Documenta en cada DTO los campos obligatorios, tipos y validaciones.
- Actualiza este archivo cada vez que un endpoint crítico tenga cambios en su patrón de datos.

Mantén este estándar y tus endpoints siempre estarán protegidos ante errores, ataques o datos inesperados.
