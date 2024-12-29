# GitHub File Tree Generator - Firefox Extension

## Overview

The **GitHub File Tree Generator** is a Firefox extension that allows you to generate a file tree for any GitHub repository directly from your browser. This extension is particularly useful for developers who want to quickly visualize the structure of a repository without cloning it locally.

## Features

- **Generate File Trees**: Automatically generates a file tree for the GitHub repository you are currently viewing.
- **Copy to Clipboard**: Easily copy the generated file tree to your clipboard with a single click.
- **User-Friendly Interface**: Simple and intuitive interface with loading and error states for a smooth user experience.
- **Lightweight**: Minimalistic design and efficient code ensure fast performance.

## Installation

1. **Download the Extension**:
   - Clone or download this repository to your local machine.

2. **Load the Extension in Firefox**:
   - Open Firefox and navigate to `about:debugging`.
   - Click on **This Firefox** in the sidebar.
   - Click on **Load Temporary Add-on**.
   - Select the `manifest.json` file from the downloaded repository.

3. **Start Using the Extension**:
   - Navigate to any GitHub repository.
   - Click on the GitHub File Tree Generator icon in the Firefox toolbar.
   - The file tree will be generated and displayed in the popup.

## Usage

1. **Open a GitHub Repository**:
   - Navigate to the GitHub repository for which you want to generate a file tree.

2. **Click the Extension Icon**:
   - Click on the GitHub File Tree Generator icon in the Firefox toolbar.

3. **View the File Tree**:
   - The file tree will be generated and displayed in the popup window.

4. **Copy the File Tree**:
   - Click the **📋** button to copy the file tree to your clipboard.

## Limitations

- **GitHub API Rate Limits**: The extension uses the GitHub API, which has rate limits for unauthenticated requests. If you encounter rate limit issues, you may need to modify the code to include a GitHub personal access token in the request headers.
- **Repository Size**: The extension may struggle with very large repositories due to API limitations and performance constraints.
- **Nested Directories**: The extension currently supports nested directories but may have performance issues with deeply nested structures.

## Future Enhancements

Here are some planned features and enhancements for the extension:

- [ ] **Fold/Unfold Tree Structure**: Add the ability to fold and unfold directories in the tree for better navigation.
- [ ] **Select and Download Files**: Allow users to select specific files from the tree and download them directly.
- [ ] **Generate Combined Text File**: Provide an option to generate a combined text file from selected files in the tree.
- [ ] **Dark Mode**: Add a dark mode option for better usability in low-light environments.
- [ ] **Search Functionality**: Implement a search feature to quickly find files or directories within the tree.
- [ ] **Export as JSON/CSV**: Add options to export the file tree as JSON or CSV for further analysis.
- [ ] **Customizable Tree View**: Allow users to customize the tree view (e.g., show/hide file extensions, sort by name/type).

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## Acknowledgments

- Thanks to GitHub for providing the API that makes this extension possible.
- Inspired by the need for a quick and easy way to visualize repository structures.