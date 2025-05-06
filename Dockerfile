
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


FROM node:23-alpine AS builder
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build

FROM node:23-alpine
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

RUN npm install --only=production

EXPOSE 4005

CMD [ "node", "dist/main.js" ]