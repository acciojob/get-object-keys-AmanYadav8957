//your JS code here. If required.
// Create the student object  
const student = {  
    name: "Alice" // Add a name property  
};  

// Add getKeys method to Object prototype  
Object.prototype.getKeys = function() {  
    return Object.keys(this); // Returns an array of keys for the object  
};  

// Example usage  
console.log(student.getKeys()); // Output: ["name"]