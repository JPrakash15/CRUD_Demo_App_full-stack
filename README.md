
# CRUD App using Java, MySQL, and React

## Project Overview

This is a simple CRUD application built using Java, MySQL, and React. The application allows users to create, read, update, and delete users.

## Getting Started

### Prerequisites

* Java 11 or later
* MySQL 8 or later
* Node.js 14 or later

### Installation

1. Clone the repository: `git clone https://github.com/JPrakash15/CRUD_Demo_App_full-stack`
2. Install dependencies: `npm install`
3. Start the Java server: `java -jar target/CRUD_Demo_App_full.jar`
4. Start the React app: `npm start`

## API Documentation

### Users

| Endpoint | Method | Description |
| --- | --- | --- |
| `/users` | GET | Retrieve a list of all users |
| `/users/{id}` | GET | Retrieve a single user by ID |
| `/users` | POST | Create a new user |
| `/users/{id}` | PUT | Update an existing user |
| `/users/{id}` | DELETE | Delete a user |

## Database Schema

The database schema consists of a single table, `users`, with the following columns:

| Column Name | Data Type | Description |
| --- | --- | --- |
| `id` | `int` | Unique identifier for the user |
| `name` | `varchar` | User name |
| `email` | `varchar` | User email |

## React Components

The application uses the following React components:

* `UserList`: Displays a list of all users
* `UserForm`: Allows users to create or update a user

## Java Backend

The Java backend uses Spring Boot and Hibernate to interact with the MySQL database.

## Contributing

To contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Commit your changes
4. Open a pull request

## License

This project is released under the MIT License.
