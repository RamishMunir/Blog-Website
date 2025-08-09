"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Switch } from "./switch";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return(
        <div className="flex items-center space-x-2">
            <Sun className={`${theme === "light" ? "text-yellow-600" : ""}`}></Sun>
            {mounted && <Switch checked={theme === "dark"} onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}></Switch> }            
            <Moon></Moon>
        </div>
    );
}