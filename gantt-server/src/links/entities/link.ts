import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type LinkDocument = Link & Document;

@Schema()
export class Link {
    @Prop({required: true})id: number;
    @Prop() source: number;
    @Prop() target: number;
    @Prop() type: string;
}
export const LinkScheama = SchemaFactory.createForClass(Link)