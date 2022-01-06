import { novaTheme } from "./nova";
import { tecnoTheme } from "./tecno";


const themeOptions = {
    "tecno" : tecnoTheme,
    "default": novaTheme
}

export function themeFactory(theme) {
    return themeOptions[theme] || themeOptions["default"]
}