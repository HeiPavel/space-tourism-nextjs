'use client';

import { SharedImage } from "../SharedImage/SharedImage";
import { useScreenSize } from "../useScreenSize/useScreenSize";
import { ImageProps } from "next/image";

type ToolImageProps = Omit<ImageProps, 'src'> & {tool: string};

export const ToolImage = (props: ToolImageProps) => {
    const {tool, ...rest} = props;
    const orientations = {
        landscape: "(width <= 1024px)",
        portrait: "(1024px < width)"
    }

    const imageOrientation = useScreenSize(orientations);

    return (
        <>
            {imageOrientation ? <SharedImage
                                    src={`/assets/technology/image-${tool}-${imageOrientation}.jpg`}
                                    {...rest}
                                /> : []
            }
        </>
    );
}