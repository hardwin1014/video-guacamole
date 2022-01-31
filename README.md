# video-guacamole
Node+vue  全栈项目-视频网站+APP+小程序

### 关于目录结构
+ 一种模式来管理多个项目 monorepo（单体项目，可以放多个项目）模式
1. 先安装nest脚手架
2. cd server ---> nest g app admin  代表在server文件夹下创建一个子项目
3. 运行项目 nest start -w admin
4. 创建数据库文件夹,数据库完全独立的 /server  文件夹下，nest g lib db 