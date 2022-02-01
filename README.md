# video-guacamole
Node+vue  全栈项目-视频网站+APP+小程序

### 关于目录结构
+ 一种模式来管理多个项目 monorepo（单体项目，可以放多个项目）模式
1. 先安装nest脚手架
2. cd server ---> nest g app admin  代表在server文件夹下创建一个子项目
3. 运行项目 nest start -w admin
4. 创建数据库文件夹,数据库完全独立的 /server  文件夹下，nest g lib db 
5. 安装使用 TypeScript 类定义 Mongoose 模型 typegoose/typegoose
6. 为嵌套组件和控制器注入typegoose模型。@nestjs/ mongoose 的Typegoose 等价物,使用 Typegoose 消除了对模型接口的需求。nestjs-typegoose
7. 为server下面的子项目添加模块 nest g mo -p admin users  // mo代表模块，co代表控制器
8. 管理api的工具 yarn add @nestjs/swagger swagger-ui-express