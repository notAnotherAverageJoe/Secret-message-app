// Check if there's a hash in the URL and decode it
const { hash } = window.location;
if (hash) {
  const message = atob(hash.replace("#", ""));
  console.log(message);

  if (message) {
    // Hide the message form and show the message display
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");

    // Display the decoded message
    document.querySelector("h1").innerHTML = message;
  }
}

// Add an event listener to the form to handle message submission
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide the message form and show the link form
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  // Get the input message, encode it in Base64, and create a URL with the hash
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  // Display the generated URL in the link input field
  const input2 = document.querySelector("#link-input");
  input2.value = `${window.location.origin}${window.location.pathname}#${encrypted}`;
  input2.select(); // Select the input text for easy copying
});
