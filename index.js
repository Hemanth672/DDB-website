
function validates(){
        
    let username =document.form.fn.value;
    let email =document.form.ln.value;
    let mobile =document.form.mob.value;
    let guests=document.form.guest.value;
    let date=document.form.date.value;
    let time=document.form.time.value;
if(username==""){
    alert("Name cannot be Empty")
    return false;
    }

else if(mobile.length!=10){
    alert("Invalid Mobile Number")
    return false;
}
else if(email==""){
    alert("Email Id cannot be empty")
    return false;
}
else if(date==""){
    alert("Please Mention the Date for Reservation")
    return false;
}
else if(time==""){
    alert("Please Mention the Time for Reservation")
    return false;
}
else if(guests==0){
    alert("Please Enter Number of Guests")
    return false;
}
else{
    alert("Submitted Successfully !!!")
    window.location.href="reservations.html";

}

}

const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("nav .navbar-nav li a");
window.onclick = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id"); }
  });

  navlinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


// let sections=document.querySelectorAll("section")
// let navlinks=document.querySelectorAll("nav a")
// window.onscroll = () => {
//     var current = "";
  
//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       if (pageYOffset >= sectionTop ) {
//         current = section.getAttribute("id"); }
//     });
  
//     navlinks.forEach((li) => {
//       li.classList.remove("active");
//       if (li.classList.contains(current)) {
//         li.classList.add("active");
//       }
//     });
//   };