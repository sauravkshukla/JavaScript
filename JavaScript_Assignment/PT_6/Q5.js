// Function to validate a URL using regex
function validateURL(url) {
    const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-._~:\/?#[\]@!$&'()*+,;=%]+(\.[a-zA-Z]+)+$/;

    if (urlRegex.test(url)) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is not valid.");
    }
}

// Test the function with different URLs
validateURL("http://example.com");
validateURL("https://example.com");
validateURL("http://example.com/path/to/resource");
validateURL("https://subdomain.example.com");
validateURL("ftp://example.com"); // Invalid URL
validateURL("http://example"); // Invalid URL
