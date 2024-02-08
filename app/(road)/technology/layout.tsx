'use client';

import { useState, useEffect, createContext, ReactNode } from "react";

type ImageOrientation = 'landscape' | 'portrait' | null;


export const ScreenContext = createContext<ImageOrientation>('portrait');

export default function TechnologyLayout({
    children,
  }: Readonly<{
    children: ReactNode;
  }>) {
    const [imageOrientation, setImageOrientation] = useState<ImageOrientation>(null);

    useEffect(() => {
        const matchDevice = [window.matchMedia("(width <= 1024px)"), window.matchMedia("(1024px < width)")];
        const detectDeviceSize = (): ImageOrientation => {
            return matchDevice[0].matches ? 'landscape' : 'portrait';
        };
        const handleChange = (event: MediaQueryListEvent) => {
            if (event.matches) setImageOrientation(detectDeviceSize());
        };
        setImageOrientation(detectDeviceSize());
        matchDevice.forEach(match => match.addEventListener('change', handleChange));
        return () => {
            matchDevice.forEach(match => match.removeEventListener('change', handleChange));
        }
    }, []);

    return (
        <ScreenContext.Provider value={imageOrientation}>
            {children}
        </ScreenContext.Provider>
    );
}