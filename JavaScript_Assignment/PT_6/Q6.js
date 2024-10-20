// Function to validate LinkedIn profile URLs
function validateLinkedInURL(url) {
    const urlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (urlRegex.test(url)) {
        console.log("The LinkedIn profile URL is valid.");
    } else {
        console.log("The LinkedIn profile URL is not valid.");
    }
}

// Test the function with various URLs
validateLinkedInURL("https://www.linkedin.com/in/johndoe"); // Valid
validateLinkedInURL("https://www.linkedin.com/in/jane_doe-123"); // Valid
validateLinkedInURL("https://www.linkedin.com/in/john"); // Not valid (too short)
validateLinkedInURL("https://www.linkedin.com/in/johndoe12345678901234567890"); // Not valid (too long)
validateLinkedInURL("https://www.linkedin.com/in/john.doe"); // Not valid (invalid character)
validateLinkedInURL("http://www.linkedin.com/in/johndoe"); // Not valid (incorrect protocol)
