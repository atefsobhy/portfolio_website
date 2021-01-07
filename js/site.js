const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_l780ebr';
   const templateID = 'template_orq65se';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Yay!!! You just sent me a message!!!',
        showConfirmButton: false,
        timer: 1500
    });
    }, (err) => {
      btn.value = 'Send Email';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
});