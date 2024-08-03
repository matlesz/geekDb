"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({children}) {
  return (
    <div>
        <ThemeProvider enableSystem={true} attribute="class">
            <div className="dark:bg-green-950 dark:text-green-700 text-green-950 transition-colors duration-300 min-h-screen select-none">{children}</div>

        </ThemeProvider>
    </div>
  )
}
