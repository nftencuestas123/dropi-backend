# Uso y Acceso a la Documentación Swagger

Esta documentación visual, generada automáticamente por Swagger en tu backend Dropi, es imprescindible para desarrolladores, testers, integradores y auditores.

**¿Cómo acceder a la doc y tester en vivo?**

1. Verifica que en tu archivo src/main.ts tengas configurado Swagger/OpenAPI (usa DocumentBuilder y SwaggerModule).
2. Corre tu backend normalmente:
   npm run start:dev
3. Accede en el navegador a:
   http://localhost:3000/api-docs

Desde allí podrás ver, probar y entender todos los endpoints: parámetros de entrada, estructuras de respuesta, permisos, roles requeridos y ejemplos en tiempo real.

**Recomendaciones:**
- Mantén siempre este acceso documentado y actualizado.
- Si cambias el path por seguridad, actualiza esta guía y notifica al equipo.
- Exporta regularmente la documentación en JSON/YAML para integraciones empresariales, partners o auditoría externa.

No subestimes nunca la importancia de la documentación: es tu carta de presentación frente a cualquier aliado, cliente o revisor técnico.
