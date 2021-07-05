
function project_popup1(){
  Swal.fire({
    title: 'My Blog Site',
    text: 'A very functional blog site.          Notes: Because this project run on Heroku free sever, it may take a minute to boost up. Sorry for this inconvenience.',
    imageUrl: 'img//work-1.jpg',
    
    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://duylanle-blog.herokuapp.com/","_blank")
    }
  })
}
function project_popup2(){
  Swal.fire({
    title: 'My Online Market',
    text: 'An eCommerce web application.           Notes: Because this project run on Heroku free sever, it may take a minute to boost up. Sorry for this inconvenience.',
    imageUrl: 'img//online_market_picture.png',
    
    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("http://duylanle-ecommerce.herokuapp.com/","_blank")
    }
  })
}
function project_popup6(){
  Swal.fire({
    title: 'My Personal Ecommerce',
    text: 'An eCommerce web application.           Notes: Because this project run on Heroku free sever, it may take a minute to boost up. Sorry for this inconvenience.',
    imageUrl: 'img//online_market_picture.png',
    
    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("http://duylanle-ecommerce.herokuapp.com/","_blank")
    }
  })
}
function project_popup3(){
  Swal.fire({
    title: 'Bug Tracker',
    text: 'A wonderful tool every company need.        Notes: Because this project run on Heroku free sever, it may take a minute to boost up. Sorry for this inconvenience.',
    imageUrl: 'img//work-3.jpg',
    
    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("http://duylanle-bugtracker.herokuapp.com/","_blank")
    }
  })
}

function project_popup4(){
  Swal.fire({
    title: 'Personal Angular Blog',
    text: 'I build my personal blog using ASP .NET MVC C# as back-end, Angular as front-end, and PostgreSQL as my Database.',
    imageUrl: 'img//work-1.jpg',
    
    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://duylanle-blog.netlify.app/","_blank")
    }
  })
}

function project_popup5(){
  Swal.fire({
    title: 'Personal Angular Blog',
    text: 'I build my personal blog using ASP .NET MVC C# and also API controller for my Blog Angular project, and using PostgreSQL as my Database.',
    imageUrl: 'img//work-1.jpg',
    
    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://duylanle-blogmvc.herokuapp.com/","_blank")
    }
  })
}
function blog_popup1(){
  Swal.fire({
    title: 'My Travel Blog',
    text: 'Traveling is always a good experience, see new things in front of your eyes is a fantastic emotion.',
    imageUrl: 'img//post-1.jpg',

    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      open("https://duylanle-blog.herokuapp.com/?search=travel","_blank")
    }
  })
}
function blog_popup2(){
  Swal.fire({
    title: 'See more ideas about my Website Development',
    text: 'Building and maintaining web is my job and I want to share my story to you.',
    imageUrl: 'img//post-2.jpg',

    
    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      open("https://duylanle-blog.herokuapp.com/?search=development","_blank")
    }
  })
}
function blog_popup3(){
  Swal.fire({
    title: 'See more ideas about my Trading Bot',
    text: 'Trading is a way to earn money, My plan is to build a auto Trading Bot using Python.',
    imageUrl: 'img//post-3.jpg',

    
    confirmButtonColor: '#3085d6',
    
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      open("https://duylanle-blog.herokuapp.com/?search=python","_blank")
    }
  })
}
function download_success(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Yay!!! You just download my resume!!!',
    showConfirmButton: false,
    timer: 2000
});
}

function minisites_popup1(){
  Swal.fire({
    title: 'My Tacocat Site',
    text: 'A very fun mini site',
    imageUrl: 'img//Tacocat.png',
    confirmButtonColor: '#3085d6',
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://duylanle-tacocat.netlify.app", "_blank")
    }
  })
}
function minisites_popup2(){
  Swal.fire({
    title: 'My Sudoku Solver',
    text: 'See my Sudoku playground!',
    imageUrl: 'img//project-1.jpg',
    confirmButtonColor: '#3085d6',
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(" https://duylanle-sudoku.netlify.app/", "_blank")
    }
  })
}
function minisites_popup3(){
  Swal.fire({
    title: 'My Superdog Event',
    text: 'I had a very fun time in here!',
    imageUrl: 'img//superdog.jpg', 
    confirmButtonColor: '#3085d6',  
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://duylanle-superdog.herokuapp.com/", "_blank")    }
  })
}
function minisites_popup4(){
  Swal.fire({
    title: 'My FizzBuzz Site',
    text: 'A classic algorithm but never be old!',
    imageUrl: 'img//fizzbuzz.jpg',
    confirmButtonColor: '#3085d6', 
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://duylanle-fizzbuzz.netlify.app/", "_blank")    }
  })
}
function minisites_popup5(){
  Swal.fire({
    title: 'Sum of All Fear',
    text: 'Curious? Go and have a look at it!',
    imageUrl: 'img/SumOfAllFears.jpg', 
    confirmButtonColor: '#3085d6',  
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://duylanle-sumofallfear.netlify.app/", "_blank")    }
  })
}
function minisites_popup6(){
  Swal.fire({
    title: 'My Sunset Hills',
    text: "Want to see a beautiful sunset?",
    imageUrl: 'img//sunset.jpg',
    confirmButtonColor: '#3085d6',
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://duylanle-sunsethills.netlify.app/", "_blank")    }
  })
}
function minisites_popup7(){
  Swal.fire({
    title: 'My Mortgage Calculator',
    text: 'Place where I calculate my mortgage payment!!!',
    imageUrl: 'img//calculator.jpg',
    confirmButtonColor: '#3085d6',
    confirmButtonText: "Let's goooooo!!!"
  }).then((result) => {
    if (result.isConfirmed) {
      window.open("https://duylanle-mortgage-calculator.netlify.app", "_blank")
    }
  })
}
function minisites_popup8(){
  Swal.fire({
    title: 'My Sorting Algorithm',
    text: 'I practice soting skill in here!!!',
    imageUrl: 'img//sorting.jpg',
    confirmButtonColor: '#3085d6',
    confirmButtonText: "Coming Soon"
  }).then((result) => {
    if (result.isConfirmeSSSd) {
      window.open("", "_blank")
    }
  })
}
function minisites_popup9(){
  Swal.fire({
    title: 'My Javascript Tips And Tricks',
    text: 'I saved a lot of javascript tips and tricks in here!!!',
    imageUrl: 'img//tipsandtricks.jpg',
    confirmButtonColor: '#3085d6',
    confirmButtonText: "Coming Soon"
  }).then((result) => {
    if (result.isConfirmeSSSd) {
      window.open("", "_blank")
    }
  })
}

const btn = document.getElementById('button1');

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
        timer: 2000
    });
      document.getElementById("form").reset();
    }, (err) => {
      btn.value = 'Send Email';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        showConfirmButton: false,
        timer: 2000
      });
    });
    document.getElementById("form").reset();
});