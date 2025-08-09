"use client"
import { useTheme } from "next-themes";

export default function ThemeToggle(){
    const {theme, setTheme} = useTheme();
    
    return(
        <div>theme</div>
    );
}