function getFirstSelector(selector) {
  document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('#nested .target');
}

const list = document.querySelectorAll('ul .ranked-list');
function increaseRankBy(n){
Array.from(list).forEach((e) => {
  parseInt(list[i].innerHTML) += parseInt(n);
})
}

