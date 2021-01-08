const btnSignIn = getById('signInSend')
const username = document.createElement('span')
const header = getById('header')
header.appendChild(username)

function authorization() {
    const passfromlocal = localStorage.getItem('pass')
    const emailfromlocal = localStorage.getItem('email')
    if (passfromlocal && emailfromlocal) {
        console.log('user is registered')
        username.innerHTML = emailfromlocal
    } else {
        console.log('go and sign in motherfucker')
    }
    btnSignIn.onclick = async function (event) {
        let db = await (await fetch(url)).json()
        let signInEmailorLogin = getById('signInEmail').value
        let signInPassword = getById('signInPassword').value
        console.log(db)
        for (let user of db) {
            if ((signInEmailorLogin === user['login'] || user['email']) && (signInPassword === user['password'])) {
                console.log(`Hello ${user['name']} You are Sign IN`)
                let localPass = localStorage.setItem('pass', `${user['password']}`)
                let localEmail = localStorage.setItem('email', `${user['email']}`)
                username.innerHTML = user['name']
                break
            }
        };
    }
}
authorization()