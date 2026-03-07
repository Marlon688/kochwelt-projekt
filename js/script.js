const hamMenu = document.getElementById("ham-menu");
const headerNavLinks = document.getElementById("header-nav-links");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  headerNavLinks.classList.toggle("active");
});

//contact-form

function cleanContact() {
  document.getElementById("contactform_name").value = "";
  document.getElementById("contactform_email").value = "";
  document.getElementById("contactform_message").value = "";
}
