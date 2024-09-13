import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import color from "tinycolor2";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const gradients = new Map();

export function generateGradient(hue: number) {
    if (gradients.has(hue)) {
        return gradients.get(hue);
    } else {
        const gradient = color({ h: hue % 360, s: 0.9, l: 0.6 })
            .analogous()
            .slice(0, 2)
            .map((color: any) => color.toHexString())
            .join(", ");
        const value = `linear-gradient(35deg, ${gradient})`;
        gradients.set(hue, value);
        return value;
    }
}
