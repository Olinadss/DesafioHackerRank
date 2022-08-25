const n = 5;

const p = 2;

function pageCount(n, p) {
  // Write your code here
  let countHomePage = Math.floor(p/2);
  let countEndPage = Math.floor(n/2) - Math.floor(p/2);

  if (countHomePage < countEndPage) {
    return countHomePage;
  } else {
    return countEndPage
  }
}

console.log(pageCount(n, p));
