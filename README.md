# 🧡 HanOpener

A simple bash script that scrapes [Hacker News](https://news.ycombinator.com) and opens all the front page stories in your default browser.

## Features

- 🧡 Scrapes the Hacker News front page for story links
- 🌐 Opens all stories in your default browser with one command
- 🖥️ Cross-platform support (macOS, Linux, Windows)
- 📊 Shows you exactly which stories will be opened before proceeding
- ⚡ Built-in rate limiting to avoid overwhelming your browser

## Usage

1. Make the script executable:
   ```bash
   chmod +x hanopener.sh
   ```

2. Run the script:
   ```bash
   ./hanopener.sh
   ```

3. The script will:
   - Fetch the current stories from Hacker News
   - Display a numbered list of all stories found
   - Ask for confirmation before opening them
   - Open each story in your default browser with a small delay

## Example Output

```
🧡 Hacker News Story Opener (Bash Version)
==========================================
Fetching stories from news.ycombinator.com...
Found 30 stories!

Stories to open:
1. https://example.com/story1
2. https://example.com/story2
...

Open all 30 stories in your browser? (y/N): y

Opening stories...
Opening 1/30: https://example.com/story1
Opening 2/30: https://example.com/story2
...

✅ Successfully opened 30/30 stories!
```

## Requirements

- `curl` - for fetching web pages
- `grep` - for text processing
- `sed` - for text manipulation
- A system command to open URLs:
  - macOS: `open` (built-in)
  - Linux: `xdg-open` (usually pre-installed)
  - Windows: `start` (built-in)

## Platform Support

- ✅ **macOS**: Uses the `open` command
- ✅ **Linux**: Uses `xdg-open` command
- ✅ **Windows**: Uses `start` command
- ⚠️ **Other systems**: Will display URLs for manual copying

## How It Works

1. **Fetches HTML**: Downloads the Hacker News front page using `curl`
2. **Extracts URLs**: Uses `grep` and `sed` to find all story links with `class="storylink"`
3. **Processes URLs**: Converts relative URLs to absolute URLs
4. **User Confirmation**: Shows all stories and asks for permission
5. **Opens Stories**: Uses the appropriate system command to open each URL

## Development

This project was built using:
- **[Amazon Q](https://aws.amazon.com/q/)** - AI assistant for development
- **[Claude](https://claude.ai)** - AI assistant for code generation and debugging
- **[Container Use by Dagger](https://github.com/dagger/container-use)** - Development environment management

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This script is for educational and personal use. Please be respectful of Hacker News and don't abuse their servers with excessive requests.