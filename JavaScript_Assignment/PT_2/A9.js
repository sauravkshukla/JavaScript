function uniqueCharactersCheck(username) {
    const charSet = new Set(username);
    if (charSet.size === username.length) {
        return "The input string contains unique characters.";
    } else {
        return "The input string contains duplicates.";
    }
}
console.log(uniqueCharactersCheck("mithun"));
console.log(uniqueCharactersCheck("anurag"));
