# Web CMD Simulator

Web CMD Simulator in pure and vanilla JavaScript, just for fun.

## Description

This project is a web-based command line simulator that replicates some of the functionality of the Command Prompt (CMD) on a Windows operating system. It is built using HTML, CSS (using Tailwind CSS), and JavaScript. The simulator provides users with a familiar interface similar to the native command line interface, allowing them to run commands and execute some operations.

## Demo

You can play the demo in Github Pages accessing [https://adaiasmagdiel.github.io/web-cmd-simulator/](https://adaiasmagdiel.github.io/web-cmd-simulator/).

## Possible (but not guaranteed) functionalities

- Command execution: Users can enter commands in the simulator and get the respective output.
- History (soon): The simulator maintains a history of executed commands for reference.
- Command autocomplete (maybe sometime): The simulator suggests command options based on user input.
- Output customization (Definitely not yet, but you can send a pull request): Users can modify the appearance and style of the output text.
- File system simulation (Yes, somehow): The simulator replicates a file system, allowing users to navigate directories and perform file operations.
- Error handling: The simulator provides informative error messages for invalid commands or operations.

## Available commands at the moment

- dir
- cls

Yes, there's no `help` yet and `dir` command have no flags by now.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/AdaiasMagdiel/web-cmd-simulator.git
   ```

2. Open the `index.html` file in your preferred web browser.

3. Enjoy all the fun that JavaScript can bring (or not).

## Usage

- Enter a command in the input prompt and press Enter to execute it.
- Use the up and down arrows to navigate through command history.
- Press Tab to autocomplete commands or file/directory names.
- Customize the appearance of the output by applying CSS classes to the generated HTML.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for details.
