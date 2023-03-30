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
    const curItem = document.querySelector(`${wrapperClass} .active`)

    if (curItem && curItem.offsetLeft - scrollWrap.offsetLeft + curItem.clientWidth / 2 > scrollWrap.clientWidth / 2) {
        const distance = curItem.offsetLeft - scrollWrap.offsetLeft - scrollWrap.clientWidth / 2

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
