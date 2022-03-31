let main_card_visa = document.querySelectorAll('.main_card_visa')

main_card_visa.forEach(section_header => {
    
        section_header.addEventListener('mousemove', rotate)
        section_header.addEventListener('mouseout', rotateNone)
        
});

 function rotate(e) {
    
     const card = this;/* .querySelector('.main_card_visa') */
     const halfHeight = card.offsetHeight / 2

 card.style.transform = `rotateX(${-(e.offsetY - halfHeight) / 5}deg) rotateY(${(e.offsetX - halfHeight) / 5}deg)`
}
 
function rotateNone(e) {
    
 const card = this;/* querySelector('.main_card_visa') */
 card.style.transform = 'rotate(0)'
 
}