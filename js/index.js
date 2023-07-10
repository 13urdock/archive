let i = 0;
for (i = 1; i <= 9; i++){
  document.write("<div>");
  document.write(`<h2>${i}단</h2>`);
  for(let j = 1; j <= 9; j++){
    document.write(i + " x " + j + " = " + i*j + "<br>");
  }
  document.write("</div>");
}
