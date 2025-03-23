const xhr = new XMLHttpRequest();
xhr.addEventListener("load", () => {
  console.log(xhr.response);
});
xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();
//send() is asynchronus (i.e, it doesn't wait for the reponse).
// so we use addEventListener to wait for a reponse
