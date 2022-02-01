import {Controller} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {Crud} from 'nestjs-mongoose-crud'
import {ApiTags} from "@nestjs/swagger";
import {Episodes} from "@libs/db/models/episodes.model";
import {ReturnModelType} from "@typegoose/typegoose";

// 在这里进行增删改查
@Crud({
    model: Episodes
})

@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
    // 注入 初始化名字必须是model，用curd插件固定的
    constructor(@InjectModel(Episodes) private readonly model:ReturnModelType<typeof Episodes>) {
    }
}
