import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		xs: '390px',
  		sm: '640px',
  		md: '768px',
  		mdSm: '800px',
  		mdLg: '900px',
  		lg: '1024px',
  		ipadPro: {
  			raw: '(min-height: 1366px)'
  		},
  		xl: '1280px',
  		'2xl': '1500px',
  		'3xl': '1700px',
		'4xl': '2000px',
  	},
  	extend: {
		  animation: {
			'spin-slow': 'spin 5s linear infinite',
			'marquee-up': 'marquee-up 30s linear infinite',
			'marquee-up-delayed': 'marquee-up 50s linear infinite',
			'marquee-up-delayedMobile': 'marquee-up 200s linear infinite',
			typing: 'typing 8s steps(200) forwards, blink .7s infinite'
		  },
		  keyframes: {
			'marquee-up': {
			  '0%': { transform: 'translateY(0)' },
			  '100%': { transform: 'translateY(-50%)' },
			},
			typing: {
			  '0%': {
				width: '0%',
				visibility: 'hidden'
			  },
			  '100%': {
				width: '100%'
			  }
			},
			blink: {
			  '50%': {
				borderColor: 'transparent'
			  },
			  '100%': {
				borderColor: 'white'
			  }
			}
		  },
		  backgroundImage: {
			'custom-gradient': 'linear-gradient(#FCFCFC, #FCFCFC00, #FCFCFC00, #FCFCFC)',
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
