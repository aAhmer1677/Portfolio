# Abdullah Ahmer Portfolio

A modern personal portfolio website built with Flask, featuring animated UI elements, theme switching, project and achievement pages, CV download/view, and a contact form.

## Usage Notice

This repository is proprietary and not open source.

You may not copy, reuse, modify, publish, distribute, or create derivative works from this project without explicit prior written permission from the owner.

## Live Website

- GitHub: https://vercel.com/aahmer1677s-projects/portfolio/4E1uBjbLRbvrt86Wi4uu57xdSDC4

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

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aAhmer1677/Portfolio.git
cd Portfolio
```

### 2. Create and activate a virtual environment

Windows PowerShell:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the application

```bash
python app.py
```

Then open:

- http://127.0.0.1:5000

## Contact Form Storage Note

Submitted messages are currently appended to data.txt in plain text.

For production use, consider replacing this with:

- A database (for example PostgreSQL or SQLite)
- Input sanitization and stricter validation
- Email delivery integration or a backend queue

## License

All rights reserved. This project is proprietary.

See LICENSE for full terms.
