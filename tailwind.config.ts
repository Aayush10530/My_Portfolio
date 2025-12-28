import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#2b7cee",
                "background-light": "#f6f7f8",
                "background-dark": "#050505",
                "surface-dark": "#161616",
                "border-subtle": "rgba(255, 255, 255, 0.08)",
            },
            fontFamily: {
                "display": ["var(--font-space-grotesk)", "sans-serif"],
                "body": ["var(--font-noto-sans)", "sans-serif"],
                "mono": ["var(--font-fira-code)", "monospace"],
            },
            borderRadius: {
                "squircle": "32px",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }
        },
    },
    plugins: [],
};
export default config;
