export type imageProp = {
    src: string,
    quality?: number
}

export const imageLoader = ({ src, quality }: imageProp) => {
    return `${src}?q=${quality || 75}`;
}