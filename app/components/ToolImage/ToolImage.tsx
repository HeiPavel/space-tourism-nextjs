'use client';

import { SharedImage } from "../SharedImage/SharedImage";
import { useScreenSize } from "../useScreenSize/useScreenSize";
import globalStyles from '../../styles/global.module.scss';

export const ToolImage = ({tool} : {tool: string}) => {
    const orientations = {
        landscape: "(width <= 1024px)",
        portrait: "(1024px < width)"
    }

    const imageOrientation = useScreenSize({devices: orientations, defaultValue: null});

    return (
        <>
            {imageOrientation ? <SharedImage
                                    src={`/assets/technology/image-${tool}-${imageOrientation}.jpg`}
                                    className={globalStyles.visibility}
                                    alt='space tool'
                                    width={50}
                                    height={50}
                                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={true}
                                    quality={100}
                                    style={{
                                            width: '100%',
                                            height: 'auto',
                                            verticalAlign: 'middle'
                                    }}
                                /> : []
            }
        </>
    );
}