let result;
ul = document.getElementById("task-list");
// // children
result = ul.children;
ul.children[0].children[0].children[0].checked = true;
result = ul.children[0].children[0].children[0].checked;
// result = ul.firstElementChild;
// result = ul.lastElementChild;
// // parent
// result = ul.parentElement;
// // next element sibling, previous
// result = ul.children[0].nextElementSibling;
// result = ul.children[2].previousElementSibling;

console.log(result);
