

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

    axios.post('http://localhost:4000/email', formData).then((res) => {
        alert('Your session has been scheduled! Excited to capture some memories with you!:)')
        console.log(res.data)
            
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        phoneNumber.value = '';
        select.value = '';
        date.value = '';
        time.value = '';
      
    })

})