document.addEventListener("DOMContentLoaded", async () => {
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    const fileTree = document.getElementById("file-tree");

    // Show loading spinner
    loading.style.display = "block";
    error.style.display = "none";
    fileTree.style.display = "none";

    // Get the current tab's URL
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const url = tab.url;

    // Check if the URL is a GitHub repository URL
    if (url && url.includes("github.com")) {
        const urlParts = url.split("/");
        const owner = urlParts[3];
        const repo = urlParts[4];

        if (owner && repo) {
            // Automatically fetch and display the file tree
            try {
                const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch repository contents: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("API Response:", data); // Log the response

                // Check if the response is an array
                if (Array.isArray(data)) {
                    const tree = await generateFileTree(data);
                    fileTree.textContent = tree;
                    fileTree.style.display = "block";
                } else {
                    throw new Error("The repository is empty or the response is invalid.");
                }
            } catch (err) {
                error.textContent = `Error: ${err.message}\n\nPlease make sure you are on a valid GitHub repository page.`;
                error.style.display = "block";
            }
        } else {
            error.textContent = "This is not a valid GitHub repository page.\n\nPlease make sure you are on a valid GitHub repository page.";
            error.style.display = "block";
        }
    } else {
        error.textContent = "Please open a GitHub repository page.";
        error.style.display = "block";
    }

    // Hide loading spinner
    loading.style.display = "none";
});

// Add copy functionality
document.getElementById("copy-btn").addEventListener("click", () => {
    const fileTree = document.getElementById("file-tree").textContent;
    navigator.clipboard.writeText(fileTree).then(() => {
        const copySuccess = document.getElementById("copy-success");
        copySuccess.style.display = "block";
        setTimeout(() => {
            copySuccess.style.display = "none";
        }, 2000); // Hide after 2 seconds
    });
});

async function generateFileTree(contents, indent = "") {
    let tree = "";
    for (const item of contents) {
        if (item.type === "dir") {
            tree += `${indent}├── ${item.name}/\n`;
            const subContents = await fetchDirectoryContents(item.url);
            tree += await generateFileTree(subContents, indent + "│   ");
        } else {
            tree += `${indent}├── ${item.name}\n`;
        }
    }
    return tree;
}

async function fetchDirectoryContents(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch directory contents: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Directory Contents:", data); // Log the response
    return data;
}