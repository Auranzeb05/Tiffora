# Tiffora Development Guidelines

## Code Quality Standards

- Write clean, maintainable code with focus on readability
- Use meaningful variable and function names
- Keep functions small and focused on single responsibility
- Add comments for complex logic, not for obvious code

## Project Structure

### Directory Organization

```
src/app/
├── components/
│   ├── ui/          - Reusable UI components (buttons, cards, inputs, etc)
│   └── layout/      - Page layout wrappers (AdminLayout, CustomerLayout, etc)
├── pages/
│   ├── admin/       - Admin dashboard and management pages
│   ├── customer/    - Customer-facing portal pages
│   ├── delivery/    - Delivery partner application pages
│   ├── auth/        - Authentication and account pages
│   └── marketing/   - Public-facing marketing pages
└── utils/           - Utility functions and helpers
```

## Component Guidelines

### Naming Conventions

- Use PascalCase for component files: `OrderCard.tsx`, `MealSelector.tsx`
- Use kebab-case for style files: `order-card.css`
- Named exports preferred over default exports
- Component props interface: `ComponentNameProps`

### Component Architecture

- One component per file
- Keep components under 300 lines
- Extract complex logic into custom hooks
- Use composition over inheritance

### Props and Types

- Always define prop interfaces
- Use TypeScript strict mode
- Document props with JSDoc comments
- Default props should be minimal

## Styling

### Design System

**Colors:**
- Primary: `#6366f1` (Indigo) - Main brand color
- Secondary: `#64748b` (Slate) - Neutral backgrounds
- Success: `#10b981` (Emerald) - Positive actions
- Warning: `#f59e0b` (Amber) - Alerts
- Error: `#ef4444` (Red) - Destructive actions

**Typography:**
- Sans-serif: Inter for UI text
- Monospace: JetBrains Mono for code/data

### Tailwind CSS

- Use Tailwind utility classes for styling
- Avoid inline styles
- Use dark mode with `dark:` prefix
- Responsive design: `md:`, `lg:` prefixes required

## State Management

- Use `useState` for local component state
- Lift state up when needed by multiple components
- Consider context API for theme, auth state
- Avoid prop drilling with context

## Performance

- Memoize expensive components with `React.memo()`
- Use `useCallback` for event handlers passed to children
- Lazy-load route components with `React.lazy()`
- Avoid unnecessary re-renders

## Accessibility

- Use semantic HTML: `<button>`, `<nav>`, `<main>`
- Include ARIA labels for interactive elements
- Ensure keyboard navigation works
- Maintain color contrast ratios (WCAG AA minimum)

## Testing Considerations

- Component structure should be testable
- Keep business logic in separate functions
- Mock external dependencies
- Test user interactions, not implementation details

## Git Workflow

- One feature per branch
- Descriptive commit messages
- Code review before merge
- Keep commits atomic and logical

## Documentation

- Add README to complex features
- Document custom hooks with examples
- Include JSDoc for public functions
- Update guidelines when patterns change
