# Task Management Application

This is a simple Task Management Application that allows users to create, read, update, and delete tasks. The application is built using a React frontend and a Node.js backend with a MySQL database.

## Features

- Add new tasks with a title, description, and due date.
- View detailed information of each task.
- Edit existing tasks.
- Delete tasks.
- Responsive design for both desktop and mobile devices.

## Technologies Used

### Frontend
- React
- Axios
- HTML
- CSS

### Backend
- Node.js
- Express
- MySQL
- CORS

## Getting Started

### Prerequisites

- Node.js
- MySQL
- Git

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/PedalStart.git
    cd PedalStart
    ```

2. **Backend Setup:**

    - Navigate to the `backend` directory:

        ```sh
        cd backend
        ```

    - Install the required npm packages:

        ```sh
        npm install
        ```

    - Create a `.env` file in the `backend` directory and add your MySQL configuration:

        ```plaintext
        DB_HOST=localhost
        DB_USER=yourusername
        DB_PASSWORD=yourpassword
        DB_NAME=taskmanager
        ```

    - Start the backend server:

        ```sh
        node index.js
        ```

3. **Frontend Setup:**

    - Navigate to the `frontend` directory:

        ```sh
        cd ../frontend
        ```

    - Install the required npm packages:

        ```sh
        npm install
        ```

    - Start the React development server:

        ```sh
        npm start
        ```

4. **Database Setup:**

    - Create the `taskmanager` database and `tasks` table:

        ```sql
        CREATE DATABASE taskmanager;
        USE taskmanager;

        CREATE TABLE tasks (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            dueDate DATETIME
        );
        ```

5. **Access the Application:**

    - Open your browser and navigate to `http://localhost:3000`.

## Project Structure

