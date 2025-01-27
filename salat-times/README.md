# salat-time CLI

**salat-time CLI** is a simple command-line tool that fetches and displays daily Islamic prayer times for any city. Powered by the Aladhan API, this tool helps Muslims stay updated on prayer schedules conveniently from their terminal.

## Features
- Fetch prayer times for any city.
- User-friendly interface with color-coded output.
- Default city set to Lagos, Nigeria (customizable).

## Installation

1. Clone the repository or install via npm:
   ```bash
   npm install -g salat-times-cli
   ```

2. Make sure you have Node.js (v16 or higher) installed.

## Usage

### Basic Usage
Run the following command in your terminal:
```bash
salat-times --city <city-name>
```

### Example
```bash
$ salat-times --city Lagos
```

**Output**:
```plaintext
Prayer Times for Lagos:
Fajr: 05:20
Dhuhr: 12:35
Asr: 15:50
Maghrib: 18:10
Isha: 19:45
```

### Default City
If you don’t provide a city, the tool defaults to **Lagos, Nigeria**:
```bash
$ salat-times
```

---

## Options
| Option           | Description                     | Default         |
|-------------------|---------------------------------|-----------------|
| `-c, --city`      | Specify the city name.          | `Lagos`         |
| `-V, --version`   | Display version information.    |                 |

---

## How It Works
1. The tool uses the [Aladhan API](https://aladhan.com/prayer-times-api) to fetch prayer times.
2. Input your city using the `--city` option.
3. Outputs prayer times formatted neatly in the terminal.

---

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/salat-times-cli.git
   cd salat-times-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the tool locally:
   ```bash
   node index.js --city <city-name>
   ```

---

## Contribution

Contributions are welcome! Here's how you can help:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---
