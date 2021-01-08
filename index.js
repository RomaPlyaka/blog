var url = 'http://localhost:3000/users'
const getById = function (tag) {
    return document.getElementById(tag)
}
const signUpPopup = document.getElementById('signUpPopup')
const err = signUpPopup.appendChild(document.createElement('span'))
err.innerHTML = 'Ошибка, пользователь с такими данными уже зарегистрирован'
err.id = 'error'
err.style = `
 paddind: 10px 15px;
 border: 3px solid #f00;
`
const btnSignUp = getById('signUpSend')
btnSignUp.onclick = async function (event) {
    let loginvalue = getById('signUplogin').value
    let signUpEmail = getById('signUpEmail').value
    let signUpPassword = getById('signUpPassword').value
    let signUpName = getById('signUpName').value
    let signUpSurname = getById('signUpSurname').value
    let db = await (await fetch(url)).json()

    function postDataSignUp() {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: loginvalue,
                email: signUpEmail,
                password: signUpPassword,
                name: signUpName,
                surname: signUpSurname
            }, )
        })
    }
    console.log(db)



    if (db.some(element => {
            return element['email'] === signUpEmail || element['login'] === loginvalue
        })) {
            err.classList.add('opened')
    } else if (signUpEmail.length !== 0 && loginvalue !== 0) {
        postDataSignUp()
        err.classList.remove('opened')
        //done.classlist.add('opened')
    }
}