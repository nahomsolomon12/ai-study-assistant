# Web Development Basics

## The Three Pillars of the Web

Every website is built on three core technologies:

| Technology | Role | Analogy |
|-----------|------|---------|
| **HTML** | Structure & Content | Skeleton of a building |
| **CSS** | Styling & Layout | Paint, decor, furniture |
| **JavaScript** | Behavior & Interactivity | Electricity & plumbing |

---

## HTML (HyperText Markup Language)

HTML uses **tags** to define elements on a webpage.

### Basic Document Structure
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

### Common HTML Elements

**Headings** (h1 is most important, h6 least):
```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section Heading</h3>
```

**Text & Links:**
```html
<p>A paragraph of text.</p>
<a href="https://example.com">Click here</a>
<strong>Bold text</strong>
<em>Italic text</em>
```

**Lists:**
```html
<!-- Unordered (bullet) list -->
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>

<!-- Ordered (numbered) list -->
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>
```

**Images:**
```html
<img src="photo.jpg" alt="Description of image">
```

**Forms:**
```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Submit</button>
</form>
```

### Semantic HTML
Semantic elements clearly describe their purpose:
```html
<header>   — Page or section header
<nav>      — Navigation links
<main>     — Main content area
<section>  — Grouped content
<article>  — Self-contained content
<aside>    — Sidebar content
<footer>   — Page or section footer
```

---

## CSS (Cascading Style Sheets)

CSS controls how HTML elements look.

### Syntax
```css
selector {
    property: value;
    property: value;
}
```

### Selectors
```css
/* Element selector */
p { color: blue; }

/* Class selector (. prefix) */
.highlight { background: yellow; }

/* ID selector (# prefix) */
#header { font-size: 24px; }

/* Descendant selector */
nav a { text-decoration: none; }
```

### The Box Model
Every HTML element is a rectangular box:
```
┌─────────────────────────┐
│         MARGIN          │
│  ┌───────────────────┐  │
│  │      BORDER       │  │
│  │  ┌─────────────┐  │  │
│  │  │   PADDING   │  │  │
│  │  │  ┌───────┐  │  │  │
│  │  │  │CONTENT│  │  │  │
│  │  │  └───────┘  │  │  │
│  │  └─────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

```css
.box {
    width: 200px;
    padding: 16px;
    border: 2px solid black;
    margin: 24px;
}
```

### Flexbox Layout
Flexbox makes it easy to align and distribute space:
```css
.container {
    display: flex;
    justify-content: center;   /* horizontal alignment */
    align-items: center;       /* vertical alignment */
    gap: 16px;                 /* space between items */
}
```

### CSS Variables
```css
:root {
    --primary-color: #3b82f6;
    --font-size-base: 16px;
}

button {
    background-color: var(--primary-color);
    font-size: var(--font-size-base);
}
```

---

## JavaScript Basics

JavaScript makes pages interactive.

### DOM Manipulation
The **DOM (Document Object Model)** is the browser's representation of the HTML page. JavaScript can read and modify it.

```javascript
// Select elements
const heading = document.getElementById("title");
const buttons = document.querySelectorAll(".btn");

// Modify content
heading.textContent = "New Title";
heading.style.color = "red";

// Add/remove CSS classes
heading.classList.add("active");
heading.classList.remove("hidden");
```

### Event Listeners
```javascript
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Button was clicked!");
});

// Common events: click, submit, keydown, mouseover, load
```

### Fetch API (HTTP Requests)
```javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

---

## How the Web Works

1. User types a URL in the browser
2. Browser performs a **DNS lookup** to find the server's IP address
3. Browser sends an **HTTP request** to the server
4. Server processes the request and sends back an **HTTP response**
5. Browser renders the HTML, CSS, and JavaScript

### HTTP Methods
| Method | Purpose |
|--------|---------|
| GET    | Retrieve data |
| POST   | Submit/create data |
| PUT    | Update data |
| DELETE | Delete data |

### HTTP Status Codes
- **200 OK** — Success
- **301 Moved Permanently** — Redirect
- **400 Bad Request** — Client error
- **401 Unauthorized** — Authentication required
- **404 Not Found** — Resource doesn't exist
- **500 Internal Server Error** — Server error

---

## Responsive Design

Websites must work on all screen sizes.

### Viewport Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Media Queries
```css
/* Default styles for mobile */
.container { width: 100%; }

/* Styles for tablets and up */
@media (min-width: 768px) {
    .container { width: 750px; }
}

/* Styles for desktops */
@media (min-width: 1024px) {
    .container { width: 960px; }
}
```

---

## Practice Questions
1. What is the difference between an HTML element's `id` and `class` attributes?
2. Explain the CSS box model and its four parts.
3. What does the DOM stand for and why is it important for JavaScript?
4. What HTTP method would you use to create a new user account via an API?
5. Why is the viewport meta tag important for responsive design?
