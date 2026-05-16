import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const getFormValue = (field, form) => form?.[field]?.value;

export const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// public/ klasöründeki bir varlığı Vite dağıtım tabanına (BASE_URL) göre
// çözer. Kök dağıtımda (base "/") "/logo.png" -> "/logo.png" (değişmez).
// Yalnızca yerel asset yolları için; harici (http) / data / boş değerlere dokunmaz.
export const asset = (path = "") => {
    if (!path || /^(https?:)?\/\//.test(path) || path.startsWith("data:")) {
        return path;
    }
    const base = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");
    return `${base}/${String(path).replace(/^\/+/, "")}`;
};