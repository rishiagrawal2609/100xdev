
# HTML

---

## HTML Basics
HTML (HyperText Markup Language) is the backbone of web development. Below are the fundamental elements of HTML and their usage.

### HTML Structure
- `<HTML>`: Optional but good to have as the root element.
- `<HEAD>`: Optional, used for metadata such as title and links to CSS/JS files.
- `<BODY>`: Optional, contains the visible part of the web page.

> **Note:** The browser automatically injects these elements when rendering an HTML file if not explicitly included.

### Common HTML Tags

#### Block Elements
- `<div>`: A block container that occupies the full width available.
- `<h1> ... <h6>`: Heading tags, `<h1>` being the largest and `<h6>` the smallest.
- `<p>`: Defines a paragraph.
- `<center>`: Centers content horizontally (Deprecated; use CSS instead).

#### Inline Elements
- `<span>`: Takes only as much space as needed.
- `<b>`: Makes text bold.
- `<i>`: Makes text italic.
- `<a>`: Creates a clickable hyperlink.
- `<img>`: Embeds an image in the document.

#### Form Elements
- `<input>`: Creates an input field for user data.
- `<button>`: Creates a clickable button.

### Attributes
HTML elements can have **attributes** that define their behavior.
Example:
```html
<a href="https://example.com" target="_blank">Click Here</a>
```
- `href`: Specifies the link URL.
- `target="_blank"`: Opens the link in a new tab.

---

# CSS

---

## CSS Basics
CSS (Cascading Style Sheets) is used to style HTML elements and control their positioning.

### Common CSS Properties
#### Text and Background
- `color`: Changes the text color.
- `background-color`: Changes the background color of an element.
- `background`: Can set an image, gradient, or color as background.

Example:
```html
<div style="color: green; background-color: aqua;">Hi there</div>
```

#### Spacing and Borders
- `padding`: Adds space inside the element.
- `margin`: Adds space outside the element.
- `border`: Defines a border around an element.
- `border-radius`: Rounds the corners of an element.
- `box-shadow`: Creates a shadow effect.

Example:
```html
<div style="padding: 10px; margin: 20px; border: 2px solid black; border-radius: 5px; box-shadow: 5px 5px 10px gray;">
    Styled Box
</div>
```

---

## Example HTML Page with CSS
Here is a basic HTML page demonstrating the above concepts:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
        }
        .container {
            width: 50%;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
        }
        .btn {
            background-color: blue;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Web Page</h1>
        <p>This is an example of an HTML page with CSS styling.</p>
        <button class="btn">Click Me</button>
    </div>
</body>
</html>
```

This page:
- Styles the body with a background color.
- Uses a centered `.container` with padding, border-radius, and box-shadow.
- Styles a button with CSS.
