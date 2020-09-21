
const mobileMenuButton = document.querySelector('#menu-toggle')
const mobileMenuContent = document.querySelector('.hamburger-menu')
const closeMobileMenuButton = document.querySelector('.hamburger-menu__close')
const hedaerLogoRefresh = document.querySelector('.page-refresh')
const footerLogoTop = document.querySelector('.page-top')

mobileMenuButton.addEventListener('click', openMobileMenu)
closeMobileMenuButton.addEventListener('click', closeMobileMenu)
hedaerLogoRefresh.addEventListener('click', () => location.reload())
footerLogoTop.addEventListener('click', () => window.scroll(0,0))

function openMobileMenu() {
  mobileMenuContent.style="display: block"
  mobileMenuContent.classList.add('open-menu')
}

function closeMobileMenu() {
  mobileMenuContent.style="display: none"
  mobileMenuContent.classList.remove('open-menu')
}

