var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
document.body.onkeyup = function jump(e) {
  if (character.classList == "animate" && e.keyCode === "Spacebar") {
    return;
  }
  document.getElementById("truckSound").play();
  document.getElementById("screamSound").pause();
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
    document.getElementById("hornSound").play();
  }, 400);
};
var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 30 && blockLeft > -30 && characterTop >= 130) {
    block.style.animation = "none";
    document.getElementById("screamSound").play();
    document.getElementById("truckSound").pause();
    document.getElementById("hornSound").pause();

    alert(
      "You've hit the Blind man. Drive carefully! score: " +
        Math.floor(counter / 100)
    );
    counter = 0;
    document.getElementById("screamSound").pause();
    block.style.animation = "block 1s infinite linear";
    document.getElementById("highScore").innerHTML = Math.max(
      document.getElementById("scoreSpan").innerHTML
    );
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
