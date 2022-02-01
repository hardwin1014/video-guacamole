import {Controller} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {User} from "@libs/db/models/user.model";
import {Crud} from 'nestjs-mongoose-crud'
import {ApiTags} from "@nestjs/swagger";

// 在这里进行增删改查,管理所有用户信息
@Crud({
    model: User
})

@Controller('users')
@ApiTags('用户')
export class UsersController {
    // 注入 初始化名字必须是model，用curd插件固定的
    constructor(@InjectModel(User) private readonly model) {
    }
}
