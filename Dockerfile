
# Usamos una imagen oficial de Node.js
FROM node:20-alpine
# Creamos el directorio de la app
WORKDIR  /usr/src/app
# Copiamos los archivos necesarios
COPY package*.json ./
# Instalamos la dependencias 
RUN npm install --production
# Copiamos el resto del codigo
COPY . .
# Compilamos la app
RUN npm run build
#exponemos el puerto (el mismo de caprover)
EXPOSE 3000
# Comando de Arranque
CMD ["node", dist/main]


