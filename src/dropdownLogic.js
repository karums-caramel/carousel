const dropdown = function dropItDown(e) {
  //console.log(e.target.childNodes)
  const dropdownInnerElement = e.target.lastChild.previousSibling;
  const dropdownOuterElement = e.target;
  dropdownInnerElement.classList.toggle('shown');
  dropdownOuterElement.classList.toggle("dropped");
};

export { dropdown };
