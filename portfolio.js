// code for top scroll
let myBtn = document.getElementById("myBtn");
function topScroll() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// code for contact information
function submit() {
  let info = {};
  info.name = document.getElementById("Name").value;
  info.email = document.getElementById("Email").value;
  info.comment = document.getElementById("Comments").value;
  localStorage.setItem('info', JSON.stringify(info));
  let user = localStorage.getItem('info');
  if(info.name === "" && info.email === "" && info.comment === ""){
    alert("Please fill the contact form before submitting. :)");
  }
  else{
  alert(`Name:-${info.name} 
  Email:-${info.email} 
  Comment:- ${info.comment} 
  Thanks for your feedback :)`);
}
  // localStorage.setItem('Name', name);
  // localStorage.setItem('Email', email);
  // localStorage.setItem('Comment', comment);
  // alert(localStorage.getItem('Name'));
};