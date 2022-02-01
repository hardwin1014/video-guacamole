import {Global, Module} from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from "@libs/db/models/user.model";
import {Course} from "@libs/db/models/course.model";
import {Episodes} from "@libs/db/models/episodes.model";

// 定义的模块需要在数据库中引入
// TypegooseModule.forFeature   注册User模型
const models = TypegooseModule.forFeature([
    User,
    Course,
    Episodes
])

@Global()
@Module({
  // 可以导入定义的全局模型 @Global()
  imports: [
      TypegooseModule.forRoot('mongodb://localhost/topfullstack'),
      models
  ],
  providers: [DbService],
  // 导出模型
  exports: [DbService, models],
})
export class DbModule {}
