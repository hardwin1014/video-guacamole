import {modelOptions, prop} from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

// 课时
export class Episodes {
    @prop()
    name: string

    @prop()
    file: string
}