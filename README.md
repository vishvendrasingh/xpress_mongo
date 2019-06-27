Introduction
-------------
NodeJs & Express.js with **Repository Design pattern** with working example. More clear explanation is shown in this diagram -

![Basic Architecture](https://github.com/vishvendrasingh/xpress_mongo/raw/master/basic_architecture.png)


Installation
-------------
### From this git reposity
- Take git clone 
```
git clone https://github.com/vishvendrasingh/xpress_mongo.git
```
- Install dependencies
```
npm install
```
- Then run
```
DEBUG=xpress_mongo:* nodemon npm start
```
### Bare express 
- Install Express generator globally
```
npm install express-generator -g
```
- Install 
```
express --view=pug xpress_mongo
```
- Install dependencies
```
npm install
```
- Then run
```
DEBUG=xpress_mongo:* nodemon npm start
```

ref link - [https://expressjs.com/en/starter/generator.html](https://expressjs.com/en/starter/generator.html)