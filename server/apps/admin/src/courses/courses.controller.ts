import {Controller, Inject} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {Crud} from "nestjs-mongoose-crud";
import {Course} from "@libs/db/models/course.model";
import {ApiTags} from "@nestjs/swagger";
import {ReturnModelType} from "@typegoose/typegoose";

@Crud({
    model: Course
})

@Controller('courses')
@ApiTags('课程')
export class CoursesController {
    constructor(@InjectModel(Course) private readonly model:ReturnModelType<typeof Course>) {

    }
}
