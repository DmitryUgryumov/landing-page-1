function faqAction() {
    const faqlist = document.querySelector('.faq__list')

    faqlist.addEventListener('click', e =>{
        if (e.target.className === 'faq__question') {
            e.target.nextElementSibling.classList.toggle('faq__answer_active')
        }
    })
}


function transformAction() {
    const transformButton = document.querySelector('.transform__button')
    const transformContainer = document.querySelector('.transform')

    transformButton.addEventListener('click', e => {
        transformContainer.classList.toggle('transform_active')
    })
}


faqAction()
transformAction()