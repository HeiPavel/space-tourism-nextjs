'use client';

import Image, {ImageProps} from "next/image";
import { imageLoader } from "@/app/util/imageLoader";

export const SharedImage = (props: ImageProps) => {
    return <Image loader={imageLoader} {...props}/>
}