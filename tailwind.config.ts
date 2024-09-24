import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      textColor: {
        blue: '#35bef8',
      },
      backgroundColor: {
        blue: '#35bef8',
        'blue-enfasis': '#25aff8'
      },
      dropShadow: {
        glow: '0 0 20px rgba(255, 255, 255, 0.5)'
      }
    },
  },
  plugins: [],
} satisfies Config;
