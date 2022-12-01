const contactForm = document.querySelector('.session');

let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phone-number');
let date = document.getElementById('date');
let time = document.getElementById('time');
let select = document.getElementById('pick-session')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        number: phoneNumber.value,
        session: select.value,
        date: date.value,
        time: time.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText)
        if(xhr.responseText == 'success'){
            alert('Email sent');
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            number.value = '';
            session.value = '';
            date.value = '';
            time.value = '';
        } else {
            alert('something went wrong')
        }
    }

    xhr.send(JSON.stringify(formData))
})