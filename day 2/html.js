var contactForm = document.getElementById("contactForm");

function submitForm(e) {
  var form = e.target;
  var formData = new FormData(form);

  var data = Object.fromEntries(formData.entries());

  console.log(data);

  console.log(data.phoneNumber);

  var link = document.createElement("a");

  link.href = `mailto:oktantoverrian3@gmail.com?subject=&body=Selamat pagi, perkenalkan nama saya ${data.name} silahkan hubungi saya di ${data.phoneNumber}. skill saya adalah ${data.skill}. berikut adalah pesan saya ${data.message}`;

  link.click();
}

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  submitForm(e);
});
