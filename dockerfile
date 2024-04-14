#使用node16 image
FROM node:16-alpine
#指定檔案當前目錄為 /usr/src/app
WORKDIR /usr/src/app
#複製package.json到WORKDIR中，以利安裝套件
COPY package*.json ./
#安裝套件
RUN npm install
#複製此路徑下的檔案到WORKDIR
COPY . .
#宣告使用 3000 PORT
EXPOSE 3000
#執行程式
CMD [ "node", "app.js" ]