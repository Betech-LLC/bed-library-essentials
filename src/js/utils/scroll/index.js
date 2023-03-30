'use strict'

function scrollToSection(id, spaceTop = 0) {
    const elem = document.getElementById(id)
    if (elem) {
        window.scrollTo({
            top: elem.getBoundingClientRect().top + window.scrollY - spaceTop,
            behavior: 'smooth',
        })
    }
}

function scrollCenter(wrapperClass) {
    const scrollWrap = document.querySelector(wrapperClass)
    if (!scrollWrap) return
    console.log(scrollWrap)
    const curItem = document.querySelector(`${wrapperClass} .active`)

    if (curItem && curItem.offsetLeft + curItem.clientWidth / 2 > window.innerWidth / 2) {
        const distance = curItem.offsetLeft - window.innerWidth / 2

        if (distance < scrollWrap.scrollWidth) {
            scrollWrap.scrollLeft = distance + curItem.clientWidth / 2
        } else {
            scrollWrap.scrollLeft = scrollWrap.scrollWidth
        }
    } else {
        scrollWrap.scrollLeft = 0
    }
}

export { scrollToSection, scrollCenter }
