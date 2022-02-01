import {ModelOptions, prop, Ref} from '@typegoose/typegoose'
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import {Episodes} from "@libs/db/models/episodes.model";

@ModelOptions({
    // 在这里定义schemaOptions等同于在mongoose定义
    schemaOptions: {
        // 会加上创建时间和更新时间
        timestamps: true
    }
})

// 定义一个用户模型，两个字段属性
export class Course {
    // swagger提示的
    @ApiModelProperty({description: '课程名称'})
    // 定义数据库模型字段的
    @prop()
    name: string

    @ApiModelProperty({description: '封面图'})
    @prop()
    cover: string

    @prop({itemsRef: 'Episodes'})
        // 参考
    episodes: Ref<Episodes>[]
}