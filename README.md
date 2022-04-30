# VSCode VHDL Formatter++

Fork of [VSCode VHDL Formatter](https://github.com/Vinrobot/vscode-vhdl-formatter) by Vinrobot with more config options and updated dependencies, since the original project is no longer maintained.

## Installation

Open command palette F1 and select Extensions: Install Extension, then search for 'VHDL Formatter++'.

## Usage

### Using Command Palette

- macOS: `CMD` + `SHIFT` + `P`
- Windows: `CTRL` + `SHIFT` + `P`

And type `Format Document`

### Keyboard Shortcuts

- macOS: `SHIFT` + `OPTION` + `F`
- Windows: `SHIFT` + `ALT` + `F`

If you don't like the default shortcuts, you can rebind `editor.action.formatDocument` in the keyboard shortcuts menu of VSCode.

## Configuration

| Key                                  | Default     | Values                   |
|--------------------------------------|-------------|--------------------------|
| `vhdl.formatter.insertFinalNewline`  | `false`     | `true/false`             |
| `vhdl.formatter.replaceByAliases`    | `false`     | `true/false`             |
| `vhdl.formatter.indentation`         | `tabSize`   | `String`                 |
|                                      |             |                          |
| `vhdl.formatter.align.mode`          | `Local`     | `Local/Global`           |
| `vhdl.formatter.align.all`           | `false`     | `true/false`             |
| `vhdl.formatter.align.port`          | `false`     | `true/false`             |
| `vhdl.formatter.align.function`      | `false`     | `true/false`             |
| `vhdl.formatter.align.procedure`     | `false`     | `true/false`             |
| `vhdl.formatter.align.generic`       | `false`     | `true/false`             |
| `vhdl.formatter.align.comments`      | `false`     | `true/false`             |
|                                      |             |                          |
| `vhdl.formatter.case.keyword`        | `UpperCase` | `UpperCase/LowerCase`    |
| `vhdl.formatter.case.typename`       | `UpperCase` | `UpperCase/LowerCase`    |
|                                      |             |                          |
| `vhdl.formatter.newline.port`        | `None`      | `NewLine/NoNewLine/None` |
| `vhdl.formatter.newline.then`        | `NewLine`   | `NewLine/NoNewLine/None` |
| `vhdl.formatter.newline.semicolon`   | `NewLine`   | `NewLine/NoNewLine/None` |
| `vhdl.formatter.newline.else`        | `NewLine`   | `NewLine/NoNewLine/None` |
| `vhdl.formatter.newline.generic`     | `None`      | `NewLine/NoNewLine/None` |
|                                      |             |                          |
| `vhdl.formatter.remove.comments`     | `false`     | `true/false`             |
| `vhdl.formatter.remove.blankLines`   | `false`     | `true/false`             |
| `vhdl.formatter.remove.reports`      | `false`     | `true/false`             |


## Credits

VHDL Formatter by g2384 - https://github.com/g2384/VHDLFormatter
