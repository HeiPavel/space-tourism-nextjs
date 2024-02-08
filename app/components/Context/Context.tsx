import { createContext } from "react";

export type ImageOrientation = 'landscape' | 'portrait' | null;


export const ScreenContext = createContext<ImageOrientation>('portrait');