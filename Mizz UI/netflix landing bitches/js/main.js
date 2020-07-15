const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  //add boder to current tab
  removeBorder();
  removeShow();
  //add border
  this.classList.add("tab-border");
  //grab contents item from dom
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

//remove border
function removeBorder() {
  tabItems.forEach((items) => items.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((items) => items.classList.remove("show"));
}

tabItems.forEach((items) => items.addEventListener("click", selectItem));
