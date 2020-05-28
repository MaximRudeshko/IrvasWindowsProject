import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');

    checkNumInputs('input[name = "user_phone"]')
    

    const message = {
        success: 'Ok',
        loading: 'Loading...',
        failure: 'Error'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await res.text()
    }

    form.forEach(item => {
        item.addEventListener('submit', e => {
            e.preventDefault();

            let element = document.createElement('div');
            element.classList.add('status');
            item.appendChild(element);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === 'end'){
                for(let key in state){
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                .then((res)=>{
                    console.log(res)
                    element.textContent = message.success
                }).catch(() => {
                    element.textContent = message.failure
                }).finally(() => {
                    setTimeout(() => {
                        element.remove()
                    }
                    ,3000);
                    item.reset()
                })
        })
    })
}


export default forms