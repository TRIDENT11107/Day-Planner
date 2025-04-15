# Day-Planner


A clean, intuitive daily task planner web application that helps you organize your day efficiently with a modern user interface.

![image](https://github.com/user-attachments/assets/835eb9a5-f156-4bd1-94e0-e850b713fd70)


## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [Customization](#customization)
* [Future Enhancements](#future-enhancements)
* [Contributing](#contributing)
* [License](#license)

## Introduction

Day Planner is a personal project designed to help users efficiently organize their daily tasks. The application provides a simple yet effective interface for scheduling tasks with specific times, managing task lists, and maintaining a clear overview of daily activities. This project focuses on delivering core task management functionality with a pleasant user experience.

## Features

* **Current Date Display:** Automatically shows the current date in a readable format
* **Task Scheduling:** Add tasks with specific times throughout the day
* **Time-based Sorting:** Organize tasks chronologically with one click
* **Persistent Storage:** All tasks are saved in local storage and persist between sessions
* **Task Management:** Delete individual tasks or clear all tasks at once
* **Responsive Design:** Adapts to different screen sizes for optimal viewing on all devices
* **Modern UI:** Clean, aesthetic interface with smooth animations and transitions
* **Empty State Handling:** Shows helpful message when no tasks are scheduled

## Technologies Used

* **HTML5:** Structuring the web page content
* **CSS3:** Styling the application with custom variables for theming
* **Vanilla JavaScript:** Adding interactivity and dynamic behavior
* **Local Storage API:** For persistent task storage
* **Google Fonts:** Using the Poppins font family for typography

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/day-planner.git
   ```

2. Navigate to the project directory:
   ```bash
   cd day-planner
   ```

3. Open the `index.html` file in your web browser:
   ```bash
   open index.html   # On macOS
   # or
   start index.html  # On Windows
   ```

No additional dependencies or build steps are required.

## Usage

1. When you open the application, you'll see the current date displayed at the top
2. To add a new task:
   - Select a time using the time picker
   - Enter your task description in the text field
   - Click the "Add Task" button
3. Your tasks will appear in the list below
4. To organize tasks chronologically, click the "Sort by Time" button
5. To remove a task, click the "Delete" button next to it
6. To clear all tasks at once, click the "Clear All" button
7. Tasks are automatically saved and will persist even if you close or refresh the page

## Project Structure

```
day-planner/
├── index.html          # Main HTML file with page structure
├── styles.css          # CSS styling with custom variables
├── script.js           # JavaScript for app functionality
├── screenshot.png      # Screenshot for README
└── README.md           # Project documentation
```

## Customization

The CSS uses custom variables for easy theming. To change the color scheme, edit the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #ff9a9e, #fad0c4);
    --accent-color: #ff758c;
    --accent-color-dark: #ff5252;
    --delete-color: #ff4757;
    --delete-hover: #e84118;
    --text-color: #333;
    --light-bg: #f8f9fa;
    --border-radius: 12px;
    --box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
}
```

## Future Enhancements

* **Task Categories:** Add labels or categories for better task organization
* **Dark Mode:** Implement theme toggle for light/dark mode preferences
* **Task Notifications:** Add browser notifications for upcoming tasks
* **Recurring Tasks:** Allow users to set repeating tasks (daily, weekly, etc.)
* **Drag-and-Drop:** Enable reordering tasks via drag-and-drop interaction
* **Multiple Day Planning:** Expand functionality to plan for multiple days
* **Data Export/Import:** Allow users to back up and restore their task data
* **Task Progress Tracking:** Add ability to mark tasks as in-progress or completed

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or bug fixes. Follow these steps to contribute:

1. Fork the repository
2. Create a new branch for your feature or bug fix (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes with a descriptive message (`git commit -m 'Add some amazing feature'`)
5. Push your changes to your forked repository (`git push origin feature/amazing-feature`)
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
