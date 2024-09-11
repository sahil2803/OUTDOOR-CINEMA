

# Project Setup Guide

## Fonts and Icons

To maintain a consistent design across our project, we're using specific fonts and icon sets. Follow these instructions to include them in your development environment.

### 1. Fonts

We are using the **Bebas Neue** font from Google Fonts. To add this font to your project, follow these steps:

1. **Add the Google Fonts link** to the `<head>` section of your HTML file:

    ```html
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    ```

2. **Apply the font** in your CSS file. For example:

    ```css
    body {
        font-family: 'Bebas Neue', sans-serif;
    }
    ```

### 2. Icons & Colour scheme

We are using the **Font Awesome** icon pack. To include Font Awesome in your project, do the following:

1. **Add the Font Awesome stylesheet link** to the `<head>` section of your HTML file:

    ```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    ```

2. **Use icons** in your HTML by including the appropriate Font Awesome classes. For example:

    ```html
    <i class="fas fa-camera"></i>
    ```

    You can explore available icons and their class names on the [Font Awesome website](https://fontawesome.com/icons).
### Colour Scheme
     #ffffff 
     #212121
     #2e31c7
     #6F9CEB
     #FF331F
### Summary

- **Fonts:** Include the Google Fonts link in your HTML and set the `font-family` in your CSS.
- **Icons:** Add the Font Awesome stylesheet link in your HTML and use icon classes where needed.

## Git Workflow

To manage your code effectively, follow these steps for committing changes and working with branches:

### 1. Clone the Repository

If you haven’t already, clone the repository to your local machine:

```bash
git clone https://github.com/your-repo/your-project.git
cd your-project
```

### 2. Create a New Branch

Create a new branch for your work. This helps keep your changes organized:

```bash
git checkout -b your-branch-name
```

### 3. Make Changes

Edit files as needed. For example, add fonts or icons as described above.

### 4. Stage Changes

Add the changes to the staging area:

```bash
git add .
```

### 5. Commit Changes

Commit your changes with a descriptive message:

```bash
git commit -m "Add Bebas Neue font and Font Awesome icons"
```

### 6. Push to Remote Repository

Push your branch to the remote repository:

```bash
git push origin your-branch-name
```

### 7. Create a Pull Request

Open your GitHub repository in a web browser and create a pull request from your branch to the main branch. Provide a description of the changes you made.

### Summary

- **Clone the repository:** `git clone https://github.com/your-repo/your-project.git`
- **Create a new branch:** `git checkout -b your-branch-name`
- **Stage changes:** `git add .`
- **Commit changes:** `git commit -m "Your message"`
- **Push to remote:** `git push origin your-branch-name`
- **Create a pull request:** On GitHub, open a pull request to merge your branch into the main branch.

---
# USE THE VSCODE EXTENSION FOR GIT TO MAKE IT EASIER 👌

---
