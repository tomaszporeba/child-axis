import { ObjectType, Field, ID } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The User model" })
export class User {
    [x: string]: any;
    @Field(() => ID)
    id: number;

    @Field()
    @Property({ required: true })
    firstName: String;

    @Field()
    @Property({ required: true })
    password: String;
}


export const UserModel = getModelForClass(User);