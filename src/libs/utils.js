import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const getFormValue = (field, form) => form?.[field]?.value;

export const isEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);