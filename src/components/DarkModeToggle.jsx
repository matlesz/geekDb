"use client";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);
    useEffect(() => setMounted(true), []);
    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
    <>
            {mounted && currentTheme === "dark" ? <MdLightMode className="text-xl cursor-pointer hover:text-green-500" onClick={() => setTheme("light")} /> : <MdDarkMode className="text-xl cursor-pointer hover:text-green-500" onClick={() => setTheme("dark")} />}
    </>
  );
}
