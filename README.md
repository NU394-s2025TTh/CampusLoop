# CampusLoop

CampusLoop is a React-based web application for university students to discover and share upcoming campus events in one place. Whether it's club tryouts, guest speakers, or any other gathering, CampusLoop keeps students in the loop.

## Table of Contents
1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Usage](#usage)
5. [Testing](#testing)
6. [License](#license)

---

## Features
- **Discover** new upcoming events on campus
- **Post** events to share them with others
- **Filter** and **search** events by keywords, organization, date, and more
- **Save** events for future reference

### User Persona
> Jerry is a freshman at Northwestern who wants to get involved on campus but is overwhelmed by the different event announcements scattered across websites and social media. He misses a tennis club tryout because he only finds out about it after the fact. He wishes there were a single, easy-to-navigate platform that keeps all campus events in one place.

### How CampusLoop Helps
- Jerry can see all events in a centralized feed.
- He can filter events by category or organization (like the tennis club).
- He can mark events that interest him and view them later.

---

## Getting Started
### Prerequisites
- Node.js v20 or later

### Installation
1. **Clone the repo**:
   ```bash
   git clone https://github.com/your-username/nu394-s2025tth-campusloop.git
   cd nu394-s2025tth-campusloop
   npm install
   ```

### Project Structure
nu394-s2025tth-campusloop/
├── README.md           # Project overview
├── index.html          # Application entry point
├── package.json        # NPM scripts and dependencies
├── vite.config.js      # Vite configuration
├── public/
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.jsx
    ├── App.test.jsx
    ├── index.css
    ├── index.jsx
    └── components/
        ├── EventCard.css
        └── EventCard.jsx

### Usage
```bash
npm start
npm run build
```


### Testing
```bash
npm test
```