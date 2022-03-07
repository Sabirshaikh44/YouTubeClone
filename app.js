
let nav_handler_hamburger = document.getElementById("hamburger-icon");
let nav_links = document.getElementById("nav_links");
let videoCardContainer = document.querySelector(".video_card_container");
let render_title_text = document.getElementsByClassName(
  "video_card_title_render"
);
let post_render_text = document.getElementsByClassName("post_render_text");
let views_render_text = document.getElementsByClassName("views_render_text");
let resultfoundtxt = document.getElementById("result_found_text");
let searchbar = document.getElementById("search_bar");
let trendingparatxt = document.getElementsByClassName("trending_para");
let video_render_card_container = document.getElementById("video_card_container");
let divs = document.getElementsByClassName("video_render_cards");
let close_result_banner_text_btn =  document.getElementById('close_result_banner_text');
let noresult_img = document.getElementById('noresult_img');
let goback_btn  = document.getElementById('go_back_btn');
nav_handler_hamburger.addEventListener("click", function (n) {
  if (nav_links.style.display != "block") {
    nav_links.style.display = "block";
  } else {
    nav_links.style.display = "none";
  }
});

// search filter functionality:
searchbar.addEventListener("input", function () {
  let video_render_card = document.getElementsByClassName("video_render_cards");
  Array.from(video_render_card).forEach((cards) => {
    titletext = cards.childNodes[0].nextSibling.nextElementSibling.innerText;
    let searcbarval = searchbar.value;
    if (titletext.includes(searcbarval)) {
      cards.style.display = "block";
      console.log(titletext);
    } else {
      cards.style.display = "none";
    }
  });
});




// have to use Youtube api to connect direct to youtube using our application:
// console.log(render_title_text);
// Array.from(render_title_text).forEach((title)=>{
//   title.addEventListener('click',function(){
//     console.log(title);
//     tourl = "https://www.youtube.com/watch?v="+title;
//     window.location.assign(tourl)
//   })
// })
