# Development Guide

## Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher (or pnpm)
- Git

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/tiffora/platform.git
cd platform

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Development Workflow

### Creating a New Feature

1. Create a feature branch from main
```bash
git checkout -b feature/your-feature-name
```

2. Follow the project structure guidelines in `guidelines/Guidelines.md`

3. Keep components focused and under 300 lines

4. Use TypeScript for all new code

5. Test dark mode and mobile responsiveness

### Code Standards

- Use Prettier for formatting
- Follow ESLint rules
- Write meaningful commit messages
- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`

### Building for Production

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

Output will be in the `dist/` folder.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── layout/          # Layout wrappers for different user roles
│   │   └── ui/              # Reusable UI components
│   ├── pages/
│   │   ├── admin/           # Admin dashboard pages
│   │   ├── auth/            # Authentication flows
│   │   ├── customer/        # Customer portal pages
│   │   ├── delivery/        # Delivery partner pages
│   │   └── marketing/       # Public-facing pages
│   ├── utils/               # Helper functions
│   ├── App.tsx              # Root component
│   └── routes.tsx           # Route configuration
└── styles/                  # Global styles and theming
```

## Theming

The application supports light and dark modes with automatic system preference detection.

### Customizing Colors

Edit `src/styles/theme.css` to modify:
- Primary and secondary colors
- Chart colors
- Sidebar styling
- Dark mode colors

### Typography

Default fonts are configured in `src/styles/fonts.css`:
- **UI**: Inter (sans-serif)
- **Code**: JetBrains Mono (monospace)

## Component Library

We use:
- **Radix UI**: Unstyled, accessible primitives
- **Lucide React**: 400+ icons
- **Recharts**: Chart components
- **React Hook Form**: Form handling

## Performance Considerations

- Components are memoized where beneficial
- Routes are lazy-loaded
- Images use the `ImageWithFallback` component
- Dark mode uses CSS variables for efficiency

## Debugging

### React DevTools
Install React DevTools browser extension for component inspection.

### TypeScript Checking
```bash
# Check for TypeScript errors
npx tsc --noEmit
```

## Common Tasks

### Adding a New Page
1. Create page component in `src/app/pages/{feature}/`
2. Add route in `src/app/routes.tsx`
3. Create corresponding layout if needed

### Adding a New UI Component
1. Create component in `src/app/components/ui/`
2. Export from component file
3. Use in pages as needed

### Updating Theme
1. Edit `src/styles/theme.css`
2. CSS variables update automatically
3. Test in both light and dark modes

## Troubleshooting

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
- Ensure TypeScript is up to date: `npm install -D typescript@latest`
- Check `tsconfig.json` is properly configured

## Contributing

1. Follow the code standards
2. Test all features
3. Update documentation
4. Submit pull request with clear description
5. Ensure CI/CD checks pass

## Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
