const form = document.querySelector('form');
const button = document.querySelector('.form-btn');
const error = document.querySelector('.error');
const success = document.querySelector('.success');


async function handleFormSubmit(e) {
  e.preventDefault();
  error.innerText = '';
  success.innerText = '';
  button.disabled = true;
  button.innerText = 'Sending...';
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if(name && email && message) {
    //MAKE POST REQUEST TO ENDPOINT
    try {
      const res = await fetch('https://site-server.herokuapp.com/send', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          Accept : 'application/json'
        },
        body : JSON.stringify({ name, email, message, muiz : true})
      });
      const data = await res.json();
      if(data.error) {
        error.innerText = 'Error occured while sending, please retry';
      } else {
        success.innerText = 'Message has been sent. We would get in touch very soon.'
      }
    } catch (err) {
      error.innerText = 'Network Error, please retry'
    } finally {
      button.disabled = false;
      button.innerText = 'SEND';
    }
  } else {
    alert('Please fill all fields');
    button.disabled = false;
    button.innerText = 'SEND';
    return;
  }
};


form.addEventListener('submit', handleFormSubmit);