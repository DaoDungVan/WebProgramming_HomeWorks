// lấy tất cả stylesheet trong trang
const styleSheets = document.styleSheets;

// duyệt từng stylesheet
for (let i = 0; i < styleSheets.length; i++) {
  const rules = styleSheets[i].cssRules;

  // duyệt từng rule trong stylesheet
  for (let j = 0; j < rules.length; j++) {
    console.log(rules[j].selectorText);
  }
}