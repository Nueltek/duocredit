# DuoCredit - Online Loan Platform

A clean, professional fintech landing page built with Next.js 16, TypeScript, and Tailwind CSS. This project demonstrates a real-world loan application interface with functional components.

## Features

- **Loan Calculator** - Interactive slider-based calculator with real-time calculations
- **Clean Design** - Professional fintech aesthetic, no unnecessary gradients
- **Responsive** - Fully responsive across all devices
- **Smooth Animations** - Subtle, purposeful animations using Framer Motion
- **Accessible** - Proper semantic HTML and keyboard navigation

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React Icons

## Sections

1. **Navbar** - Clean navigation with phone number and account access
2. **Hero** - Loan calculator with amount/term sliders
3. **App Download** - Mobile app promotion with QR code
4. **Why Us** - Key benefits with award showcase
5. **How to Get** - Step-by-step loan process
6. **Repayment** - Payment methods with tabs
7. **Safety** - Trust and security features
8. **FAQ** - Accordion-style questions
9. **Footer** - Links and contact information

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Design Principles

- **No color overload** - Clean, flat design
- **Functional UI** - Working calculator and interactive elements
- **Trust-focused** - Security badges and clear terms
- **Professional typography** - poppins font family
- **Purposeful color** - Orange primary, green for trust/success

## Color Palette

- Primary: `#E85A1D` (Orange)
- Secondary: `#0D9668` (Green)
- Background: `#FBF8F4` (Warm off-white)
- Text: `#333333`

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── AppDownload.tsx
    ├── WhyUs.tsx
    ├── HowToGet.tsx
    ├── Repayment.tsx
    ├── Safety.tsx
    ├── FAQ.tsx
    └── Footer.tsx
```

## License

MIT
