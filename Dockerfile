
# Usamos una imagen oficial de Node.js
FROM node:18-alpine
# Creamos el directorio de la app
WORKDIR  /app
# Copiamos los archivos necesarios
COPY package*.json ./
# Instalamos la dependencias 
RUN npm install --only=production
# Copiamos el resto del codigo
COPY --from=builder /app/dist ./dist
# Compilamos la app
RUN npx nest build
#exponemos el puerto (el mismo de caprover)
EXPOSE 4005
# Comando de Arranque
CMD ["node", "dist/main.ts"]


