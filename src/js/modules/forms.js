const forms = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name = "user_phone"]')

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/,'')
        })
    })

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