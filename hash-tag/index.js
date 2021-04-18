function hashTagGenerator(string) {
    if(string.trim() === "") return false;
    const stringWithCamelCase = string.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("")
    const stringWithHashTag = `#${stringWithCamelCase.trim()}`;
    return stringWithHashTag.length > 140 ? false : stringWithHashTag;
}

module.exports = {
    hashTagGenerator
} 