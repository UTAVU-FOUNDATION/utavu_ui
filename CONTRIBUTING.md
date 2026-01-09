# Contributing to Utavu Foundation Platform

Thank you for your interest in contributing to the Utavu Foundation platform! We welcome contributions from the community.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/UTAVU_UI.git
   cd UTAVU_UI/version_1
   ```
3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/UTAVU_UI.git
   ```
4. **Install dependencies**
   ```bash
   npm install
   ```

## Development Workflow

### Before You Start

1. **Sync with upstream**
   ```bash
   git checkout main
   git pull upstream main
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   
   Branch naming conventions:
   - `feature/` - New features
   - `fix/` - Bug fixes
   - `docs/` - Documentation updates
   - `refactor/` - Code refactoring
   - `test/` - Adding or updating tests

### Making Changes

1. **Write clean, readable code**
   - Follow the existing code style
   - Use TypeScript types properly
   - Add comments for complex logic
   - Keep functions small and focused

2. **Follow React best practices**
   - Use functional components with hooks
   - Implement proper error boundaries
   - Optimize performance with lazy loading and memoization
   - Keep components modular and reusable

3. **Test your changes**
   - Run the development server: `npm run dev`
   - Test on different screen sizes
   - Test both light and dark modes
   - Check for console errors/warnings

4. **Run linting**
   ```bash
   npm run lint
   ```
   Fix any linting errors before committing.

### Commit Guidelines

Use clear, descriptive commit messages following this format:

```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat: Add donation tracking dashboard

Added a new dashboard component to track donation metrics
including total donations, recurring donors, and monthly trends.

Closes #123
```

```
fix: Resolve mobile menu not closing on route change

The mobile navigation menu was staying open when navigating
to a new page. Added useEffect to close menu on location change.
```

### Submitting Changes

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

2. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template with:
     - Description of changes
     - Related issue numbers
     - Screenshots (for UI changes)
     - Testing notes

## Style Guidelines

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` types when possible
- Use type inference where appropriate

```typescript
// Good
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  // ...
};

// Avoid
const Button = (props: any) => {
  // ...
};
```

### React Components

- Use functional components
- Keep components focused on a single responsibility
- Extract reusable logic into custom hooks
- Use proper prop destructuring

```typescript
// Good
const UserCard: React.FC<{ name: string; email: string }> = ({ name, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

// Avoid
function UserCard(props) {
  return <div>{props.name} - {props.email}</div>;
}
```

### CSS/Tailwind

- Use Tailwind utility classes
- Follow the existing color scheme
- Ensure responsive design (mobile-first)
- Support dark mode

```typescript
// Good
<button className="px-4 py-2 bg-utavu-purple hover:bg-utavu-purple-dark text-white rounded-lg dark:bg-gray-700">
  Click me
</button>

// Avoid inline styles
<button style={{ padding: '8px 16px', backgroundColor: '#6B46C1' }}>
  Click me
</button>
```

### File Organization

- Place components in appropriate directories
- Keep related files together
- Use clear, descriptive file names
- One component per file

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── ErrorBoundary.tsx
│   └── LoadingSpinner.tsx
├── pages/
│   ├── about/
│   └── Home.tsx
└── context/
    └── ThemeContext.tsx
```

## Testing

- Write tests for new features
- Update tests when modifying existing features
- Aim for meaningful test coverage
- Test error scenarios

```typescript
// Example test structure
describe('ErrorBoundary', () => {
  it('should catch errors and display fallback UI', () => {
    // Test implementation
  });
});
```

## Documentation

- Update README.md for new features
- Add JSDoc comments to complex functions
- Document props for components
- Update CONTRIBUTING.md if changing workflow

```typescript
/**
 * Formats a date string into a human-readable format
 * @param date - ISO date string
 * @param format - Desired output format
 * @returns Formatted date string
 */
function formatDate(date: string, format: string): string {
  // Implementation
}
```

## Reporting Bugs

When reporting bugs, please include:

1. **Description** - Clear description of the issue
2. **Steps to reproduce** - How to trigger the bug
3. **Expected behavior** - What should happen
4. **Actual behavior** - What actually happens
5. **Screenshots** - If applicable
6. **Environment** - Browser, OS, Node version

## Suggesting Features

For feature requests:

1. **Use case** - Why is this feature needed?
2. **Proposed solution** - How should it work?
3. **Alternatives** - Other approaches considered
4. **Additional context** - Mockups, examples, etc.

## Questions?

If you have questions about contributing:

- Open a GitHub Discussion
- Check existing issues and PRs
- Review the project documentation

## Attribution

Contributors will be acknowledged in the project documentation.

Thank you for contributing to Utavu Foundation! 
