document.addEventListener('DOMContentLoaded', function() {
    var shop = document.querySelector('.shop')
    var invent = document.querySelector('.invent')
    var vbucks = document.querySelector('.vbucks')
    var add = document.querySelector('.add')
    var shop_btn = document.querySelector('.shop-btn')
    var invent_btn = document.querySelector('.invent-btn')
    var vbucks_btn = document.querySelector('.vbucks-btn')
    var add_btn = document.querySelector('.add-btn')

    document.querySelector('.shop-btn').onclick = () => {
        shop.style.display = ""
        shop_btn.id = 'fort-btn-2'
        invent.style.display = "none"
        invent_btn.id = 'fort-btn-3'
        vbucks.style.display = "none"
        vbucks_btn.id = 'fort-btn-3'
        add.style.display = "none"
        add_btn.id = 'fort-btn-3'
    }

    document.querySelector('.invent-btn').onclick = () => {
        shop.style.display = "none"
        shop_btn.id = 'fort-btn-3'
        invent.style.display = ""
        invent_btn.id = 'fort-btn-2'
        vbucks.style.display = "none"
        vbucks_btn.id = 'fort-btn-3'
        add.style.display = "none"
        add_btn.id = 'fort-btn-3'
    }

    document.querySelector('.vbucks-btn').onclick = () => {
        shop.style.display = "none"
        shop_btn.id = 'fort-btn-3'
        invent.style.display = "none"
        invent_btn.id = 'fort-btn-3'
        vbucks.style.display = ""
        vbucks_btn.id = 'fort-btn-2'
        add.style.display = "none"
        add_btn.id = 'fort-btn-3'
    }

    document.querySelector('.add-btn').onclick = () => {
        shop.style.display = "none"
        shop_btn.id = 'fort-btn-3'
        invent.style.display = "none"
        invent_btn.id = 'fort-btn-3'
        vbucks.style.display = "none"
        vbucks_btn.id = 'fort-btn-3'
        add.style.display = ""
        add_btn.id = 'fort-btn-2'
    }
})