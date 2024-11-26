const theme = document.getElementById("theme")
const a1 = document.getElementById("a1")
const a2 = document.getElementById("a2")
const a3 = document.getElementById("a3")
const a4 = document.getElementById("a4")
const seemore1 = document.getElementById("seemore1")
const seemore2 = document.getElementById("seemore2")
const seemore3 = document.getElementById("seemore3")
const seemore4 = document.getElementById("seemore4")

theme.addEventListener("click" , () => {
    body.classList.toggle("addtheme")
black.classList.toggle("addtheme")
a1.classList.toggle("white")
a2.classList.toggle("white")
a3.classList.toggle("white")
a4.classList.toggle("white")
a5.classList.toggle("white")
gd1.classList.toggle("white")
gd2.classList.toggle("white")
gd3.classList.toggle("white")
gd4.classList.toggle("white")
gd5.classList.toggle("white")
black2.classList.toggle("addtheme")
black3.classList.toggle("addtheme")
theme.classList.toggle("addtheme")
black4.classList.toggle("addtheme")
black5.classList.toggle("addtheme")

})
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  a1.addEventListener("mouseover" , (eo) => {
    seemore1.classList.add("yellow")
})
a1.addEventListener("mouseout" , (eo) => {
    seemore1.classList.remove("yellow")
})
a2.addEventListener("mouseover" , (eo) => {
  seemore2.classList.add("yellow")
})
a2.addEventListener("mouseout" , (eo) => {
  seemore2.classList.remove("yellow")
})
a3.addEventListener("mouseover" , (eo) => {
  seemore3.classList.add("yellow")
})
a3.addEventListener("mouseout" , (eo) => {
  seemore3.classList.remove("yellow")
})
a4.addEventListener("mouseover" , (eo) => {
  seemore4.classList.add("yellow")
})
a4.addEventListener("mouseout" , (eo) => {
  seemore4.classList.remove("yellow")
})
a5.addEventListener("mouseover" , (eo) => {
  seemore5.classList.add("yellow")
})
a5.addEventListener("mouseout" , (eo) => {
  seemore5.classList.remove("yellow")
})
theme1.addEventListener("click" , () => {
  body.classList.toggle("addtheme")
black.classList.toggle("addtheme")
a1.classList.toggle("white")
a2.classList.toggle("white")
a3.classList.toggle("white")
a4.classList.toggle("white")
a5.classList.toggle("white")

head2.classList.toggle("colorrr")
b1.classList.toggle("white")
b2.classList.toggle("white")
b3.classList.toggle("white")
b4.classList.toggle("white")
b5.classList.toggle("white")
theme1.classList.toggle("white")
gd1.classList.toggle("white")
gd2.classList.toggle("white")
gd3.classList.toggle("white")
gd4.classList.toggle("white")
black2.classList.toggle("addtheme")
black3.classList.toggle("addtheme")
theme.classList.toggle("addtheme")
black4.classList.toggle("addtheme")
black5.classList.toggle("addtheme")

})