# Eletronic Color Code Calculator

![](https://img.shields.io/badge/Enroute-Challenge) ![](https://img.shields.io/badge/Version-1.1.0-blueviolet) ![](https://img.shields.io/badge/Status-Beta-blue)


### Description

This project is a web-based eletronic color code calculator. It is designed to help users identify the resistance value of a resistor based on the color bands. The project is built using React and TypeScript, and is designed to be accessible to all users.

### Features

- Calculate resistance value based on color bands
- Calculate tolerance value based on color bands
- Accessible to all users
- Responsive design
- Light / Dark themes

### Prerequisites

- [Node.js >18.0.0](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)
- [MySQL](https://dev.mysql.com/downloads/mysql/)

### Installation

To install the project and its dependencies, run the following commands:

1. Clone this repository `git clone <repo-url>` and navigate to it `mv <repo-name>`.
2. Run `npm install` in the root directory of **each** project.
3. Make sure you have a MySQL server running on your machine.
4. Duplicate and rename each `.env.example` files on each directory (`client` & `server`).
  - Configure the `.env` file with the appropiate values, when needed.
5. On the `server` directory:
  - Run the database migrations with `npm run migrate` to create the database tables.
	- Run the database seeder with `npm run seed` to populate the database with the initial data.
	- Run `npm run dev` to start the express development server.
6. On the `client` directory:
	- Run `npm run dev` to start the vite development server.
  - Open your browser and navigate to `localhost:{PORT}` to view the project.

### Useful Links

- [Project Repository](https://github.com/AlburIvan/enroute-challenge)