console.log('start check')




let scrollRightBtn = document.getElementById('scroll-right-btn')
let scrollLeftBtn = document.getElementById("scroll-left-btn")
scrollLeftBtn.style.display = "none"

let menuContainerUnToggle = document.getElementById('menu-Container-unToggle')
let menuContainerToggle = document.getElementById('menu-Container-Toggle')
let headerToggle = document.getElementById('header-icons-toggle')
let videosFeedToggle = document.getElementById('videos-feed-toggle')


menuContainerToggle.style.display = "none"
let menuToggle = false
headerToggle.classList.add('header-category-icons-container-untoggle')
videosFeedToggle.classList.add('videos-feed-container-untoggle')
scrollLeftBtn.classList.add('scroll-btn-left-untoggle')
console.log('end check')


function menuItemToggle(){
console.log('check')
  if (menuToggle==true){
    console.log('if statement exe')
    menuContainerUnToggle.setAttribute('style', 'display:block !important')
    menuContainerToggle.style.display = "none"
    headerToggle.classList.remove('header-category-icons-container-toggle')
    videosFeedToggle.classList.remove('videos-feed-container-toggle')
    headerToggle.classList.add('header-category-icons-container-untoggle')
    videosFeedToggle.classList.add('videos-feed-container-untoggle')
    menuToggle = false
    scrollLeftBtn.classList.remove('scroll-btn-left-toggle')
    scrollLeftBtn.classList.add('scroll-btn-left-untoggle')
    console.log('if statement end')
  }
  else{
    console.log('else statement exe')
    scrollLeftBtn.classList.remove('scroll-btn-left-untoggle')
    scrollLeftBtn.classList.add('scroll-btn-left-toggle')
    menuContainerToggle.style.display = "block"
    menuContainerUnToggle.style.display = "none"
    headerToggle.classList.remove('header-category-icons-container-untoggle')
    videosFeedToggle.classList.remove('videos-feed-container-untoggle')
    headerToggle.classList.add('header-category-icons-container-toggle')
    videosFeedToggle.classList.add('videos-feed-container-toggle')
    menuToggle = true
  }
}
console.log('after func')

const scrollRightButton = document.querySelector("#scroll-right-btn");
const scrollLeftButton = document.querySelector("#scroll-left-btn");
const scrollContainer = document.querySelector(".header-category-icons");

scrollRightButton.addEventListener("click", () => {
  scrollContainer.scrollLeft += 100;
  scrollLeftButton.style.display = "block";
});

scrollLeftButton.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 100;
  scrollRightButton.style.display = "block";
});

scrollContainer.addEventListener("scroll", () => {
  if (scrollContainer.scrollLeft === 0) {
    scrollLeftButton.style.display = "none";
  } else {
    scrollLeftButton.style.display = "block";
  }
});

function scrollBtn(){
  scrollLeftBtn.style.display = "block"
}

function redirectPage(){
  window.open("youtubeclone.html", "_blank");
}
document.getElementById('shortHideUndo').setAttribute('style', 'display:none !important')
let shortContainerHeader = document.getElementById('shorts-container-header')
let shortContainerFeed = document.getElementById('shorts-container-feed')
let shortsContainerFooter = document.getElementById('shorts-footer')

function closeShortsContainer(){

  shortContainerHeader.setAttribute('style', 'display:none !important')
  shortContainerFeed.setAttribute('style', 'display:none !important')
  shortsContainerFooter.setAttribute('style', 'display:none !important')
  document.getElementById('shortHideUndo').setAttribute('style', 'display:block')
}
function openShortsContainer(){
  document.getElementById('shortHideUndo').setAttribute('style', 'display:none !important')
  shortContainerHeader.style.display='none'
  shortContainerFeed.style.display='none'
  shortsContainerFooter.style.display='none'

}

function searchAlert() {
  const searchText = document.getElementById("searchText").value;
  const url = `https://www.youtube.com/results?search_query=${searchText}`;
  alert("This is a Cloned page of Youtube web Application. Click OK to continue to the actual youtube's application with  related search result.")
  window.open(url, '_blank')


}
