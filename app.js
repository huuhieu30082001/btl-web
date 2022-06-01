const menuList = document.querySelector(".product__menu-list")
const menuProgress = document.querySelector(".product__menu-progress")

menuList.childNodes.forEach((el) => {
  el.addEventListener('click', () => {
    let index = el.getAttribute('data-index');
    menuProgress.childNodes.forEach((el, index) => {
      if (index % 2 == 1) {
        el.style.backgroundColor = '#000'
      }
    })
    menuProgress.childNodes[2*index + 1].style.backgroundColor = 'red';
  })
})