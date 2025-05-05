
# # Usamos una imagen oficial de Node.js
# FROM node:20-alpine
# # Creamos el directorio de la app
# WORKDIR  /usr/src/app
# # Copiamos los archivos necesarios
# COPY package*.json ./
# # Instalamos la dependencias 
# RUN npm install --omit=dev
# # Copiamos el resto del codigo
# COPY . .
# # Compilamos la app
# RUN npm run build
# #exponemos el puerto (el mismo de caprover)
# EXPOSE 4005
# # Comando de Arranque
# CMD ["node", "dist/main.ts"]


FROM node:20-alpine
WORKDIR /app
COPY . /app
ENV HOST=194.140.199.108
ENV USER=root
ENV PASSWORD=Mendocitaa*
ENV DATABASE=prayside
ENV DB_PORT=3308
ENV PORT=4005

RUN npm install

COPY . .

EXPOSE 4005

CMD [ "node", "main" ]
