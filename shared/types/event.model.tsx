import { Entry } from "contentful";
import { Image } from "./image.model";

export interface Event {
    name: string;
    date: Date;
    image?: Entry<Image>[];
    description?: string;
}
