const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);


    imgPopup.style.cssText = `
        display: none;
        align-items: center;
        justify-content: center;
    `;

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target && e.target.classList.contains('preview')){
            imgPopup.style.display = 'flex';

            const path = e.target.parentNode.getAttribute('href');
            bigImage.src = path
        }

        if(e.target.classList.contains('popup')){
            imgPopup.style.display = 'none'
        }
    })


}

export default images