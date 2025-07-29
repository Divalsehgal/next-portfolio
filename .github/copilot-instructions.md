---
applyTo: "**"
---

# 🤖 GitHub Copilot Instructions for This Project

These are the coding standards, design patterns, domain knowledge, and preferences that Copilot must follow when assisting with code in this repository.

---

## 🔧 General Coding Standards

- **Use TypeScript** for all components and functions.
- Ensure **strong type safety** and **avoid use of `any`** unless absolutely necessary.
- Prioritize **immutability** and **pure functions** where possible.
- Write **modular, reusable, and readable code** with clear intent.
- Prefer **descriptive names** for variables, functions, and components.

---

## 🎨 Component Standards

- Follow **Atomic Design principles** (`atoms`, `molecules`, `organisms`, `templates`, `pages`) when organizing UI components.
- Use **BEM (Block Element Modifier)** naming conventions for class names:
  - Example: `.button`, `.button__icon`, `.button--primary`
- Each component should:
  - Accept a clear, typed `props` interface.
  - Be located in its own folder with the following structure:
  - Include a unit test file.
  - Include SCSS styles (preferably using `module.scss` with BEM).

---

## ✅ Testing Guidelines

- Use **Jest** and **React Testing Library** for unit testing.
- Each component or utility must have a matching `*.test.ts(x)` file.
- Tests must include:
  - Render test
  - Behavioral test (user interactions)
  - Accessibility check if applicable
- Use **data-testid** only when necessary.
- Achieve **minimum 90% test coverage**.

---

---

## ♻️ Reusability & DRY

- Avoid repeating logic; extract to `hooks/` or `utils/` when applicable.
- Prefer **custom hooks** for shared behavior.
- Use **constants.ts** or `enums` instead of magic strings or numbers.

---

## 📐 Code Quality Rules

- Use **ESLint** and **Prettier** with opinionated formatting.
- Use **absolute imports** using the `@/` alias.
- All files must be **formatted** and **linted** before committing.
- Ensure **low cyclomatic complexity** in functions.
- Use **early returns** to reduce nested code.
- Avoid large components (>150 LOC); split if necessary.
- Add JSDoc-style comments for exported functions and components.

---

## 🕵️ Security & Performance

- Sanitize all inputs and escape dynamic HTML content.
- Optimize images and assets before use.
- Use `React.memo`, `useMemo`, and `useCallback` appropriately.
- Avoid unnecessary re-renders by managing props/state efficiently.
- Avoid using `dangerouslySetInnerHTML` unless justified with a comment and sanitization.

---

## 🎯 Domain Knowledge (If Applicable)

- This project is in the domain of: `<!-- Fill this in, e.g., eCommerce, AI tools, Developer Platforms -->`
- Use vocabulary, terms, and flows relevant to this domain.
- Maintain business logic separation from UI logic.

---

## 🧪 Commit & PR Standards

- Follow **Conventional Commits** (e.g., `feat:`, `fix:`, `refactor:`).
- Every PR must:
  - Pass all tests and linters.
  - Include a description of what and why.
  - Be reviewed by at least one team member.

---

## 🔍 Accessibility

- Use **semantic HTML** (`<button>`, `<nav>`, `<main>`, etc.)
- Ensure all interactive elements are **keyboard accessible**.
- Add `aria-*` attributes when necessary.
- Prefer `alt` tags and `aria-labels` for images and icons.

---

## 🧠 AI Behavior Expectations

When generating code, Copilot MUST:

- Follow the standards above.
- Never use `any` unless explicitly typed as safe.
- Avoid inline styles unless dynamic and scoped.
- Add test files for new components or utils.
- Use named exports for utility functions.
- Favor clarity over cleverness.

---
