let views = document.querySelector('.view')

    let cardBlock = document.querySelectorAll('.foother_title'),
    
        imgCard = views.querySelector('img');
       
        for (let i = 0; i < cardBlock.length; i++) {
            cardBlock[i].addEventListener('click', ()=>{
             
                views.classList.add('active')
                
                let imgd = cardBlock[i].querySelector('img').getAttribute('src');
                imgCard.setAttribute('src', imgd)
    
            })
        
        }
        let view__close = document.querySelector('.view__close')
        
        view__close.addEventListener('click', () => {
              
            views.classList.remove('active')
       
        })