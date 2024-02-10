'use client';

import { useState, useEffect } from "react";

type ScreenType = string | null;

type DeviceType = {
    [key: string]: string
}

export const useScreenSize = (devices: DeviceType) => {
    const [screenType, setScreenType] = useState<ScreenType>(null);

    useEffect(() => {
        const matchDevice: {[key: string]: MediaQueryList} = {};

        for (const device in devices) {
            matchDevice[device] = window.matchMedia(devices[device as keyof typeof devices]);
        }

        const detectDeviceSize = (): ScreenType => {
            for (const deviceMatch in matchDevice) {
                if (matchDevice[deviceMatch].matches) return deviceMatch;
            }
            return null;
        }

        const handleChange = (event: MediaQueryListEvent) => {
            if (event.matches) setScreenType(detectDeviceSize());
        }

        setScreenType(detectDeviceSize());
        
        Object.values(matchDevice).forEach(match => match.addEventListener('change', handleChange));

        return () => {
            Object.values(matchDevice).forEach(match => match.removeEventListener('change', handleChange));
        }
    }, []);

    return screenType;
}