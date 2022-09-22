function MobileNavBar(mobileMenu, navList, navLinks) {

    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'

    this.animateLinks = function () {
        this.navLinks.forEach((link, index) => {
            link.style.animation ?
                (link.style.animation = '') : (link.style.animation = `navLinkFade 1s ease forwards ${index / 6 + 0.2}s`)
        })
    }

    this.handleClick = function () {
        this.mobileMenu.addEventListener('click', () => {
            this.navList.classList.toggle(this.activeClass)
            this.mobileMenu.classList.toggle(this.activeClass)
            this.animateLinks()
        })
    }

    this.init = function () {
        if (this.mobileMenu) {
            this.handleClick()
        }
    }
}

const mobileNavbar = new MobileNavBar('.mobile-menu', '.nav-list', '.nav-list li')

mobileNavbar.init()