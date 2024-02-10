export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const capitalizeAll = (string: string) => {
    const strings = string.split('-');
    return strings.map(str => capitalize(str)).join(' ');
}