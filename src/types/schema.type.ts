import { ZodObject } from "zod";

import { ZodString } from "zod";

import { ZodTypeAny } from "zod";

export interface IAuthSchema extends ZodObject<{
    email: ZodString;
    password: ZodString;
}, "strip", ZodTypeAny, {
    email: string;
    password: string;
    name: string;
}, {
    email: string;
    password: string;
    name: string;
}> { }

