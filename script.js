$(document).ready(function() {
	// ================= Logout Confirmation =================
$("#confirmLogout").click(function(){
  // Redirect to login page
  window.location.href = "index.html";
});

  // ================= Login Form =================
  $("#loginForm").submit(function(e){
    e.preventDefault(); // prevent page refresh
    const username = $("#username").val().trim();
    const password = $("#password").val().trim();

    console.log("Login attempt:", username, password); // Debug

    if(username === "user" && password === "1234"){
      // Redirect to home.html
      window.location.href = "home.html";
    } else {
      alert("Invalid login! Try username: user, password: 1234");
    }
  });

  // ================= Booking Form (if on booking page) =================
  $("#bookingForm").submit(function(e){
    e.preventDefault();
    const destination = $("#destination").val();
    const date = $("#date").val();
    const people = $("#people").val();

    if(!destination || !date || people<=0){
      alert("Please fill all fields correctly!");
    } else {
      alert(`✅ Booking Confirmed!\nDestination: ${destination}\nDate: ${date}\nTravelers: ${people}`);
      window.location.href="home.html";
    }
  });
});
