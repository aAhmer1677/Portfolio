# Abdullah Ahmer Portfolio

A modern personal portfolio website built with Flask, featuring animated UI elements, theme switching, project and achievement pages, CV download/view, and a contact form.

## Usage Notice

This repository is proprietary and not open source.

You may not copy, reuse, modify, publish, distribute, or create derivative works from this project without explicit prior written permission from the owner.

## Live Website

- GitHub: https://abdullah-ahmer-portfolio.vercel.app

## Features

- Multi-page Flask application
- Responsive UI with custom cursor and scroll animations
- Light and dark theme toggle with local storage persistence
- Real-time clock in the navbar
- Achievements search and modal details
- CV preview and download support
- Contact form with server-side validation and message storage to data.txt

## Tech Stack

- Python
- Flask
- HTML
- CSS
- JavaScript

## Project Structure

```text
.
|-- app.py
|-- data.txt
|-- requirements.txt
|-- static/
|   |-- assets/
        `-- cv.pdf
|   |-- css/
|   |   `-- styles.css
|   `-- js/
|       `-- script.js
`-- templates/
    |-- achievements.html
    |-- contact.html
    |-- cv.html
    |-- index.html
    `-- projects.html
```

## Routes

- / or /index: Home page
- /projects: Projects page
- /achievements: Achievements page
- /cv: CV page
- /contact: Contact form page (GET and POST)


## License

All rights reserved. This project is proprietary.

See LICENSE for full terms.
