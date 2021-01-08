function addfile() {
    let avatar = document.getElementById('img')
    const file = document.getElementById('addavatar').files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        avatar.src = reader.result
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

let addavatar = document.getElementById('addavatar')

addavatar.onchange = function(event){
    addfile()
}