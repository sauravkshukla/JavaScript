function countWords(sentence) {
    const wordCountMap = new Map();
    
    // Normalize, split, and count words
    sentence.toLowerCase().replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .forEach(word => {
            word = word.trim(); // Remove any extra spaces
            if (word) {
                wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
            }
        });
    
    return wordCountMap;
}

// Example usage:
const sentence = "Please Please submit your assignment on time, your assignments are important";
const wordCounts = countWords(sentence);

// Convert Map to object for easier display
console.log(Object.fromEntries(wordCounts));
