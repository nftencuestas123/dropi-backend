# Usa imagen oficial de Node
FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
# Asegurar que src/ y todas sus subcarpetas están en el build context
COPY src/ ./src/
COPY tsconfig.json nest-cli.json ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
