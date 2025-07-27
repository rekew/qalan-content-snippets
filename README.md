# qalan-content-snippets

VS Code extension providing code snippets for the Qalan content team.

## Features

This extension adds commands to quickly generate Elixir modules for different types of task descriptions and solutions. The following commands are available:

- **Complex Description and Complex Solution snippet**
- **Text Description and Text Solution snippet**
- **Text Description and Complex Solution snippet**
- **Complex Description and Text Solution snippet**

Each command prompts for the number of parameters and the module name, then inserts a pre-filled Elixir module at the cursor position.

## Usage

1. Press `F5` to launch a new VS Code window with the extension loaded.
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
3. Type the name of the snippet command you want to use (see above).
4. Follow the prompts to generate your Elixir module.

## Development

- Main extension code: [`extension.js`](extension.js)
- Snippet code generator: [`snippet-codes.js`](snippet-codes.js)
- Test suite: [`test/extension.test.js`](test/extension.test.js)

### Scripts

- `pnpm run lint` — Lint the codebase with ESLint.
- `pnpm test` — Run extension tests.

## Contributing

Feel free to open issues or pull requests for improvements or bug fixes.

## License

MIT

---

**For more details,