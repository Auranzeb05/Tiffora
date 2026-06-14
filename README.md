# Tiffora - Enterprise Meal Management Platform

A comprehensive, full-stack meal delivery management system built for meal service providers, kitchen operations, and delivery logistics.

## Overview

Tiffora is an enterprise-grade solution designed to solve the operational challenges faced by tiffin services, cloud kitchens, and meal delivery providers. It provides end-to-end management from meal planning and kitchen operations to customer subscriptions and real-time delivery tracking.

## Key Features

- **Subscription Management**: Handle complex customer requirements including dietary preferences, vacation pauses, and dynamic pricing
- **Kitchen Operations**: Real-time kitchen display system with automated production planning
- **Smart Delivery Routing**: Intelligent driver assignment and route optimization
- **Customer Portal**: Self-service meal selection, wallet management, and delivery tracking
- **Admin Dashboard**: Comprehensive business analytics and operational oversight
- **Delivery Partner App**: Real-time task management and GPS tracking

## Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS 4.1.12 with custom theme
- **UI Components**: Radix UI primitives
- **Charts & Data**: Recharts for analytics
- **Forms**: React Hook Form with custom validation
- **Drag & Drop**: React DnD for task management
- **Build Tool**: Vite 6.3.5
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm package manager

### Installation

bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build


The development server will start at `http://localhost:5173`

## Project Structure

src/
├── app/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   └── layout/          # Page layout components
│   ├── pages/
│   │   ├── admin/           # Admin dashboard pages
│   │   ├── customer/        # Customer-facing pages
│   │   ├── delivery/        # Delivery partner pages
│   │   ├── auth/            # Authentication pages
│   │   └── marketing/       # Public marketing pages
│   └── utils/               # Helper functions
└── styles/                  # Global styles and theming


## Development Guidelines

- Follow TypeScript strict mode
- Use functional components with React hooks
- Maintain component-level responsibility
- Leverage Tailwind CSS for styling
- Keep components under 300 lines of code

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions

## Performance

- Lazy-loaded route components
- Memoized expensive components
- Optimized bundle size
- Dark mode support with system preference detection

## License

Proprietary - All rights reserved

---

Built and maintained by the Tiffora Development Team
