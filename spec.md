## Project Goals
1. **Core Goal**: Develop a software that recommends outfits based on given clothing component and preferences parameters.
2. **Milestones**:
   - **Unstructured MVP Checkpoint**: August 2, 2024
   - **Unstyled MVP Checkpoint**: August 9, 2024
   - **Styled MVP Release Date**: August 15, 2024

## Tasks

1. **Project Initialization**
   - Set up Next.js project
   - Configure Tailwind CSS and ShadCN
   - Establish initial directory and code structure

2. **Code Structuring**
   - Organize code into modules and components
   - Ensure consistent coding standards and practices
   - Implement reusable functions and utilities

3. **Layout Structuring**
   - Define the overall layout of the application
   - Create shared layout components (e.g., header, footer, sidebar)
   - Ensure responsive design for different screen sizes

4. **Input Functionality**
   - Develop photo upload functionality (`upload-photo` component)
   - Implement the interface and functionality for photo uploads
   - Handle input parameters and storage of photos

5. **Output Functionality**
   - Develop recommendation list display (`recommendation-list` component)
   - Implement the logic for displaying recommendation results
   - Develop history functionality page (`history` page) to show past outfits

6. **Other Functionality**
   - Develop user profile page (`profile` page) to view and edit user information
   - Develop login page (`login` page) for user authentication
   - Develop feedback page (`feedback` page) for users to provide feedback on recommendations

7. **Styling**
   - Apply consistent styling across all components using Tailwind CSS
   - Ensure components follow the design guidelines
   - Implement themes and customize styles for different use cases

## File Structure

```
/public
├── images
├── icons
/src
├── /app
│ ├── page.tsx (Home page)
│ ├── /upload
│ │ └── page.tsx (Upload photo page)
│ ├── /recommendation
│ │ └── page.tsx (Recommendations page)
│ ├── /register
│ │ └── page.tsx (User registration page)
│ ├── /login
│ │ └── page.tsx (User login page)
│ ├── /profile
│ │ └── page.tsx (User profile page)
│ ├── /history
│ │ └── page.tsx (Outfit history page)
│ └── /feedback
│ └── page.tsx (User feedback page)
├── /components
├── /styles
│ ├── globals.css
│ └── tailwind.css
├── /context
│ ├── auth-context.tsx
│ └── recommendation-context.tsx
├── /store
│ └── use-auth-store.ts (Zustand)
├── /hooks
│ ├── use-auth.ts
│ └── use-recommendations.ts
└── /utils
│ ├── /supabase
│ └── openai.ts
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Git Flow
- **Branches**:
  - main: Production-ready versions
  - develop: Main development branch
  - feature: Feature branches, naming convention: `<name>/feature`
  - release: Pre-release testing versions, created from develop
  - hotfix: Emergency fixes, naming convention: `<name>/hotfix`

- **Commit Message Rules**:
  - feat: Add or modify features
  - fix: Fix bugs
  - docs: Documentation changes
  - style: Formatting changes (non-functional)
  - refactor: Code restructuring
  - perf: Performance improvements
  - test: Add tests
  - chore: Maintenance changes
  - revert: Revert previous commit

- **Merge Rules**:
  - Direct merge for new feature development
  - Local merge and pull request for collaborative feature development, with at least one reviewer
  - Review required for merging feature into develop
  - Emergency fixes can be directly pulled request to main with review, if necessary

## GitHub Issues
- Manage and track tasks and bugs
- Create issues to flag bugs
- Use labels to categorize issues
- Close issues upon completion
- Use hashtags to reference completed issues for easier tracking

## Code Review
- Request reviews when needed
- At least one review required for pull requests to develop, release, main branches
- Hotfixes may require reviews based on the context

## Clean Code
- **SOLID Principles**: Ensure code structure is maintainable
- **Naming Conventions**:
  - File names use kebab-case
  - Class names use PascalCase
  - Constants use UPPER_CASE
- **No Magic Numbers**: Use named constants
- **Code Comments**: Avoid comments, use self-explanatory code and TODO, FIXME for special cases