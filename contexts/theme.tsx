import { createContext, ReactNode, useState } from "react";

type ThemeContextType = null | {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

type Props = {
    children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType>(null)

export const ThemeProvider = ({children}: Props) => {

    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
