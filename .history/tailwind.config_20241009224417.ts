import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.tsx"], // Specify which files Tailwind should scan
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans], // Use 'Poppins' as the default sans-serif font
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;