import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			scroll: 'scroll 50s linear infinite',
			scroll2: 'scroll2 50s linear infinite',
		},
		keyframes: {
			scroll: {
				'0%': {
					transform: 'translateX(0%)'
				},
				'100%': {
					transform: 'translateX(100%)'
				}
			},
			scroll2: {
				'0%': {
					transform: 'translateX(-100%)'
				},
				'100%': {
					transform: 'translateX(0%)'
				}
			},
		},
		borderWidth: {
		 '3': '3px',
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
			manrope: ["var(--font-manrope)", "sans-serif"],
			spacemono: ["var(--font-spacemono)", "sans-serif"],

'clash-display-extralight': ['ClashDisplay-Extralight', 'sans-serif'],
        'clash-display-light': ['ClashDisplay-Light', 'sans-serif'],
        'clash-display-regular': ['ClashDisplay-Regular', 'sans-serif'],
        'clash-display-medium': ['ClashDisplay-Medium', 'sans-serif'],
        'clash-display-semibold': ['ClashDisplay-Semibold', 'sans-serif'],
        'clash-display-bold': ['ClashDisplay-Bold', 'sans-serif'],
        'clash-display-variable': ['ClashDisplay-Variable', 'sans-serif'],
  			'gambetta-light': [
  				'Gambetta-Light',
  				'sans-serif'
  			],
  			'gambetta-light-italic': [
  				'Gambetta-LightItalic',
  				'sans-serif'
  			],
  			'gambetta-regular': [
  				'Gambetta-Regular',
  				'sans-serif'
  			],
  			'gambetta-italic': [
  				'Gambetta-Italic',
  				'sans-serif'
  			],
  			'gambetta-medium': [
  				'Gambetta-Medium',
  				'sans-serif'
  			],
  			'gambetta-medium-italic': [
  				'Gambetta-MediumItalic',
  				'sans-serif'
  			],
  			'gambetta-semibold': [
  				'Gambetta-Semibold',
  				'sans-serif'
  			],
  			'gambetta-semibold-italic': [
  				'Gambetta-SemiboldItalic',
  				'sans-serif'
  			],
  			'gambetta-bold': [
  				'Gambetta-Bold',
  				'sans-serif'
  			],
  			'gambetta-bold-italic': [
  				'Gambetta-BoldItalic',
  				'sans-serif'
  			],
  			'gambetta-variable': [
  				'Gambetta-Variable',
  				'sans-serif'
  			],
  			'gambetta-variable-italic': [
  				'Gambetta-VariableItalic',
  				'sans-serif'
  			],
  			'switzer-thin': [
  				'Switzer-Thin',
  				'sans-serif'
  			],
  			'switzer-thin-italic': [
  				'Switzer-ThinItalic',
  				'sans-serif'
  			],
  			'switzer-extralight': [
  				'Switzer-Extralight',
  				'sans-serif'
  			],
  			'switzer-extralight-italic': [
  				'Switzer-ExtralightItalic',
  				'sans-serif'
  			],
  			'switzer-light': [
  				'Switzer-Light',
  				'sans-serif'
  			],
  			'switzer-light-italic': [
  				'Switzer-LightItalic',
  				'sans-serif'
  			],
  			'switzer-regular': [
  				'Switzer-Regular',
  				'sans-serif'
  			],
  			'switzer-italic': [
  				'Switzer-Italic',
  				'sans-serif'
  			],
  			'switzer-medium': [
  				'Switzer-Medium',
  				'sans-serif'
  			],
  			'switzer-medium-italic': [
  				'Switzer-MediumItalic',
  				'sans-serif'
  			],
  			'switzer-semibold': [
  				'Switzer-Semibold',
  				'sans-serif'
  			],
  			'switzer-semibold-italic': [
  				'Switzer-SemiboldItalic',
  				'sans-serif'
  			],
  			'switzer-bold': [
  				'Switzer-Bold',
  				'sans-serif'
  			],
  			'switzer-bold-italic': [
  				'Switzer-BoldItalic',
  				'sans-serif'
  			],
  			'switzer-extrabold': [
  				'Switzer-Extrabold',
  				'sans-serif'
  			],
  			'switzer-extrabold-italic': [
  				'Switzer-ExtraboldItalic',
  				'sans-serif'
  			],
  			'switzer-black': [
  				'Switzer-Black',
  				'sans-serif'
  			],
  			'switzer-black-italic': [
  				'Switzer-BlackItalic',
  				'sans-serif'
  			],
  			'switzer-variable': [
  				'Switzer-Variable',
  				'sans-serif'
  			],
  			'switzer-variable-italic': [
  				'Switzer-VariableItalic',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
