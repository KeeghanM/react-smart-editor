# React Smart Editor

![Speed:Blazing](https://img.shields.io/badge/Speed-Blazing-orange)
![Status:WIP](https://img.shields.io/badge/Status-WIP-red)
![License](https://img.shields.io/github/license/KeeghanM/react-smart-editor)

Lightweight, super performant, opinionated text editor for React.

Inspired by electron, this editor brings gorgeous styling and blazing speeds out of the box.

Simply install, and you're ready to go.

## Features

- **Lightweight**: No dependencies, no bloat.
- **Fast**: Blazing speeds, even with large files.
- **Linking**: Auto create links with simple [[Link Name]] - the name becomes the link.
- **Tags**: Clickable tags with [# Tag Name ]] - Unique syntax enables spaces within tags
- **Themes**: Comes with gorgeous dark and light themes out of the box, with more to come.
- **Debounced**: Choose how long your debounce time is, or disable it - the choice is yours.

## Installation

`npm install react-smart-editor`

Then import and use the editor in your app:

```jsx
import React from "react"
import Editor from "react-smart-editor"

function App() {
  const handleInput = (value) => {
    // Store it in a database, or whatever you want to do with it!
  }
  return (
    <div>
      <Editor
        onChange={handleInput}
        theme={dark}
        initialValue={"Hello, world!"}
        debounceTime={500}
      />
    </div>
  )
}
```

## Usage

- The onChange prop is required, and is called with the value of the editor every time it changes.
  - Use this to store the value in a database, or whatever you want to do with it.
- The initialValue prop is optional, and sets the initial value of the editor.
- The theme prop is optional, and sets the theme of the editor. The default is dark.
- The debounceTime prop is optional, and sets the debounce time of the editor. The default is 500ms.

## Contribution

This project is open to contributions. If you have an idea for a feature, or a bug fix, feel free to open an issue or a pull request.

## License

This project is released under the MIT license.
