let parent = document.getElementById("parent"); // Get the parent element
let child = document.getElementById("child"); // Get the child element
let removedNode = parent.removeChild(child); // Remove the child element from the parent and store the removed node

console.log(removedNode); // The removedNode variable now contains the removed child element
