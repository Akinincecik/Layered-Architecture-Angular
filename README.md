# Layered Architecture Angular

## 📘 Project Description

**Layered Architecture Angular** is a project designed to implement a layered architecture pattern in an Angular application. The purpose of this project is to demonstrate how to structure Angular applications in a way that separates concerns, increases maintainability, and makes it easier to scale as the application grows. This project follows the traditional layered architecture approach, with clear separation between components, services, and data access layers.

## 🎯 Project Goals

- **Separation of concerns**: Separate the application into layers with distinct responsibilities.
- **Maintainability**: Make the codebase easier to maintain and scale by using a layered architecture.
- **Reusability**: Create reusable components and services that can be leveraged across different parts of the application.
- **Scalability**: Allow the application to easily scale and manage new features and changes.

## 🧱 Project Architecture

This project is structured using the following layers:

- **Presentation Layer**: Contains all the UI components, which handle user interaction and display data.
- **Business Logic Layer**: Responsible for the core business logic of the application, managing service operations.
- **Data Access Layer**: Manages communication with the backend API, providing the application with necessary data.
- **Shared Layer**: Contains utility services and shared components, such as authentication services and common utility functions.

## 🗂️ Key Folders and Components

### 📁 `src/app`

- **AppModule**: The root module of the application that imports and configures other modules and components.
- **Components**: UI components such as `HeaderComponent`, `FooterComponent`, `HomeComponent`, `AboutComponent`, etc.
- **Services**: Service classes such as `DataService`, `AuthService`, and `UserService` to manage data and business logic.
- **Models**: Data models used throughout the application, like `User` and `Post` models.

### 🧰 `Services`

Services are used to handle business logic and data fetching. Some of the key services include:

- **DataService**: Handles HTTP requests and data interaction with the backend.
- **AuthService**: Manages user authentication and authorization.
- **UserService**: Provides user-related operations such as registration, login, and profile management.

### 🛠️ Used Technologies

- **Angular**: The framework for building the web application.
- **TypeScript**: A superset of JavaScript used to develop the application.
- **HTML & CSS**: For building the user interface.
- **Angular CLI**: Used to create and manage the Angular project.
- **Node.js & npm**: For package management and serving the development environment.

## 🚀 Setup and Running the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Akinincecik/Layered-Architecture-Angular.git
   cd Layered-Architecture-Angular
-------------------------------------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
