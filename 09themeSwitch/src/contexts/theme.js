import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { },

})

export const ThemeProvider = ThemeContext.Provider

// this is the custom hook for using themeContext
export default function useTheme() {
    return useContext(ThemeContext)
}