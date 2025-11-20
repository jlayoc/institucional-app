FROM node:18-alpine

# Crear directorio de la app
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package.json ./
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer el puerto del backend
EXPOSE 4000

# Comando de inicio
CMD ["npm", "start"]
