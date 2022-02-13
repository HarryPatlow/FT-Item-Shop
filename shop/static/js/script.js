document.addEventListener('DOMContentLoaded', function() {

    //HOMEPAGE TABS

    var shop = document.querySelector('.shop'),
        invent = document.querySelector('.invent'),
        vbucks = document.querySelector('.vbucks'),
        add = document.querySelector('.add'),
        shop_btn = document.querySelector('.shop-btn'),
        invent_btn = document.querySelector('.invent-btn'),
        vbucks_btn = document.querySelector('.vbucks-btn'),
        add_btn = document.querySelector('.add-btn')


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


    //TABS INSIDE INVENTORY TAB


    var skin = document.querySelector('#skin'),
        glider = document.querySelector('#glider'),
        pickaxe = document.querySelector('#tool'),
        bag = document.querySelector('#bag'),
        screen = document.querySelector('#screen'),
        emote = document.querySelector('#emote'),
        dance = document.querySelector('#dance'),
        wrap = document.querySelector('#wrap'),
        main = document.querySelector('#main'),
        back_btns = document.querySelectorAll('.back')
    
        document.querySelector('.skin').onclick = () => {
            skin.style.display = "inline-block"
            glider.style.display = 'none'
            pickaxe.style.display = "none"
            bag.style.display = 'none'
            screen.style.display = "none"
            emote.style.display = 'none'
            dance.style.display = "none"
            wrap.style.display = 'none'
            main.style.display = 'none'
        }
    
        document.querySelector('.glider').onclick = () => {
            skin.style.display = "none"
            glider.style.display = 'inline-block'
            pickaxe.style.display = "none"
            bag.style.display = 'none'
            screen.style.display = "none"
            emote.style.display = 'none'
            dance.style.display = "none"
            wrap.style.display = 'none'
            main.style.display = 'none'
        }
    
        document.querySelector('.tool').onclick = () => {
            skin.style.display = "none"
            glider.style.display = 'none'
            pickaxe.style.display = "inline-block"
            bag.style.display = 'none'
            screen.style.display = "none"
            emote.style.display = 'none'
            dance.style.display = "none"
            wrap.style.display = 'none'
            main.style.display = 'none'
        }
    
        document.querySelector('.bag').onclick = () => {
            skin.style.display = "none"
            glider.style.display = 'none'
            pickaxe.style.display = "none"
            bag.style.display = 'inline-block'
            screen.style.display = "none"
            emote.style.display = 'none'
            dance.style.display = "none"
            wrap.style.display = 'none'
            main.style.display = 'none'
        }

        document.querySelector('.screen').onclick = () => {
            skin.style.display = "none"
            glider.style.display = 'none'
            pickaxe.style.display = "none"
            bag.style.display = 'none'
            screen.style.display = "inline-block"
            emote.style.display = 'none'
            dance.style.display = "none"
            wrap.style.display = 'none'
            main.style.display = 'none'
        }
    
        document.querySelector('.emote').onclick = () => {
            skin.style.display = "none"
            glider.style.display = 'none'
            pickaxe.style.display = "none"
            bag.style.display = 'none'
            screen.style.display = "none"
            emote.style.display = 'inline-block'
            dance.style.display = "none"
            wrap.style.display = 'none'
            main.style.display = 'none'
        }
    
        document.querySelector('.dance').onclick = () => {
            skin.style.display = "none"
            glider.style.display = 'none'
            pickaxe.style.display = "none"
            bag.style.display = 'none'
            screen.style.display = "none"
            emote.style.display = 'none'
            dance.style.display = "inline-block"
            wrap.style.display = 'none'
            main.style.display = 'none'
        }
    
        document.querySelector('.wrap').onclick = () => {
            skin.style.display = "none"
            glider.style.display = 'none'
            pickaxe.style.display = "none"
            bag.style.display = 'none'
            screen.style.display = "none"
            emote.style.display = 'none'
            dance.style.display = "none"
            wrap.style.display = 'inline-block'
            main.style.display = 'none'
        }

        document.querySelector('.back').onclick = () => {
            skin.style.display = "none"
            glider.style.display = 'none'
            pickaxe.style.display = "none"
            bag.style.display = 'none'
            screen.style.display = "none"
            emote.style.display = 'none'
            dance.style.display = "none"
            wrap.style.display = 'none'
            main.style.display = 'inline-block'
        }
    
})