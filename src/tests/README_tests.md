### Recordatorio de Pruebas Automatizadas ###

- Esta carpeta es el pilar invisible pero esencial para la calidad y éxito de Dropi Backend.

- Aquí residen todos los archivos de pruebas automatizadas, tanto de tipo “end-to-end” (e2e) como unitarias. Toda gran plataforma empresarial depende de que sus flujos críticos, módulos y endpoints sean verificados una y otra vez con scripts reproducibles antes de cada despliegue, mejora o integración.

- Las pruebas e2e simulan el comportamiento real de un usuario o sistema externo, asegurando que todo el backend responde correctamente, incluso ante cambios profundos o actualizaciones de dependencias.

- Las pruebas unitarias validan cada función, servicio y módulo de forma aislada, ayudando a detectar fallos invisibles que podrían costar tiempo, dinero y reputación.

Antes de todo despliegue, actualización de código, integración o migración, ejecuta siempre: ### ((npm run test:e2e)) ###

- Esto reduce el riesgo de caídas, pérdida de datos, vulnerabilidades de seguridad y garantiza que todo tu backend mantiene la estabilidad y seguridad profesional que exigen tus usuarios y stakeholders.

- La disciplina de nunca omitir los tests automatizados distingue una operación amateur de una empresa lista para escalar, atraer inversores y asegurar contratos de alto valor. Mantén y expande esta carpeta como activo central de tu código.
