import {ModelOptions, prop} from '@typegoose/typegoose'
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

@ModelOptions({
    // 在这里定义schemaOptions等同于在mongoose定义
    schemaOptions: {
        // 会加上创建时间和更新时间
        timestamps: true
    }
})

// 定义一个用户模型，两个字段属性
export class User {
    // swagger提示的
    @ApiModelProperty({description: '用户名',example:'user1'})
    // 定义模型字段的
    @prop()
    username: string

    @ApiModelProperty({description: '用户密码',example: 'user1'})
    @prop()
    password: string
}