# Diagrama rápido de Clases - Dropi Backend

Usuarios ──< pedidos >── Productos

- Usuario: id, nombre, email, password
- Producto: id, nombre, precio, stock
- Pedido: id, usuarioId, productoId, fecha

Relaciones:
- Un usuario puede tener varios pedidos.
- Cada pedido corresponde a un usuario y un producto.

(Puedes copiar este esquema y crear un diagrama visual en Lucidchart, draw.io, o Miro en 2 minutos).
