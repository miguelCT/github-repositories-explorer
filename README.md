# GitHub Repositories Explorer

>Try the project [here!](https://miguelct.github.io/github-repositories-explorer/)

This project is a GitHub Repositories Explorer built using the following technologies and development tools.

### Frontend Framework:
- **React**: The project uses React for building the user interface components. 
- **TypeScript**: Enhances type safety and code maintainability throughout the codebase. 

### Styling:
- **@mui/material** & **@mui/icons-material**: Leverages Material UI components for a consistent and beautiful design following Google's Material Design guidelines. 
    
### Data Management:
- **React Query**: Provides an easy and performant way to manage API calls and cached data within React components.
- **octokit/rest**: GitHub REST API client for JavaScript

### Routing
- **React Router**: Handles client-side routing for the application, enabling navigation between different views. Used as a library due to simplicity.

### Development Tools:
- **Vite**: Used as the build tool, offering a fast and efficient development experience with hot module replacement. 
- **Storybook**: Facilitates the development and visualization of isolated UI components. 
- **ESLint + Prettier** & **Husky**: Enforce consistent coding style and run linting checks pre-commit for better code quality. 

### Testing:
- **Vitest** + **testing-library**: For fast unit tests for Vitest + react applications. 
- **Playwright** Provides end-to-end testing capabilities for simulating user interactions. 

### CI/CD:
- **GitHub Actions**:
  - e2e tests
  - check, build and deploy to GitHub pages

## Run the project

- Clone the repository and run `npm ci` in the project folder
- Run `npm run dev` to start the development server
- Open your browser and navigate to `http://localhost:5173/`

## Unit tests

Run `npm test` to execute the Vitest runner

## Playwright tests

Run `npm run test:e2e` to run the Playwright tests

## Demo

<img src="https://github.com/miguelCT/github-repositories-explorer/blob/main/demo.gif" width="300" />

---
---

### Future improvements

- Add sorting to the github queries.
- Error reporting on Sentry or similar.
- Lighthouse score improvements: while the project gets a score of >90, improvements can be made to reach 100.
- Git: implement a branching strategy.
- Conventional commits + semantic release: for automatic semver versioning and meaningful commits.
- Storybook: deploy to server.
- Visual regression tests with @chromatic-com/storybook.
