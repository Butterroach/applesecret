document.getElementById("apple").addEventListener("click", () => {
  console.log(
    "oh hi btw the secret is that if you go fullscreen the button and image aren't actually centered perfectly >:)"
    /* btw there's a grammar error and a tpyo in this
      this comment haha cry about it lolllll */
  );
  let img = document.createElement("img");
  img.src = "apple.png";
  document.getElementById("apple").remove();
  document.getElementById("container1").appendChild(img);
});
