Este proyecto son pruebas de manejo de node.js para diversos fines:

- Conexión con un servidor pub/sub (bayeux) para que el cliente reciba datos desde el servidor.
- Conexión con servidores de BBDD (inicialmente MySQL).
- Programación por eventos / asíncrona.

Se iran añadiendo pruebas conforme sea necesario.

Para esta primera versión, es necesario instalar los paquetes:

- Faye (npm install --save faye).
- Express (npm install --save express)
- Body parser (npm install --save body-parser).
Con este se procesa el *payload* (o body) del *request* de froma que queda listo en el formato requerido (JSON, XML, etc.)
