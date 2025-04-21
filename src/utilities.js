const utilities = {
    toCamelCase(str) {
        if (typeof str === 'string'){
          return str
            .toLowerCase()
            .trim()
            .split(/[\s-_]+/) // split on space, dash, or underscore
            .map((word, index) =>
              index === 0
                ? word
                : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join('');
        } else {
          console.log('str input is not a string')
        }
    },
    camelToTitle(camelStr) {
      if (typeof camelStr !== 'string') return '';
  
      return camelStr
          .replace(/([a-z])([A-Z])/g, '$1 $2')  // Add space before uppercase letters following lowercase
          .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // Handle acronyms (e.g., HTTPRequest -> HTTP Request)
          .replace(/^./, str => str.toUpperCase())  // Capitalize the first letter
          .trim(); // Remove leading/trailing spaces
  }
  
}

export default utilities