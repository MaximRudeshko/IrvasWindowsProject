const modal = () => {
    function bindModal(modalSelector,triggerSelector,closeSelector){
        const modal = document.querySelector(modalSelector),
              trigger = document.querySelectorAll(triggerSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                openModal()
            })
        })

        modal.addEventListener('click', (e) => {
            if(e.target === modal){
                closeModal()
            }
        })

        close.addEventListener('click', () => {
            closeModal()
        })

        document.addEventListener('keydown', e => {
            if(e.code == 'Escape' && modal.style.display == 'block'){
                closeModal()
            }
        })

        function openModal(){
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'
        }

        function closeModal(){
            modal.style.display = 'none';
            document.body.style.overflow = ''
        }

        function openModalByTime(modalSelector,time){
            setTimeout(function(){
                document.querySelector(modalSelector).style.display = 'block'
            },time)
        }

        //openModalByTime('.popup', 60000)
    }


    
    bindModal('.popup_engineer','.popup_engineer_btn', '.popup_engineer .popup_close' );
    bindModal('.popup', '.phone_link', '.popup .popup_close ');

}

export default modal