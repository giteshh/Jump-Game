var blind = document.getElementById("blind");
var truck = document.getElementById("truck");
var counter = 0;

//to jump man by pressing any key
document.body.onkeyup = function jump(e) {
  if (blind.classList == "animate" && e.keyCode === "Spacebar") {
    return;
  }
  document.getElementById("screamSound").pause();
  blind.classList.add("animate");
  setTimeout(function () {
    blind.classList.remove("animate");
    document.getElementById("hornSound").play();
  }, 400);
};

// to check hit
var checkDead = setInterval(function () {
  let blindTop = parseInt(
    window.getComputedStyle(blind).getPropertyValue("top") //to get the top portion of blind
  );
  let truckLeft = parseInt(
    window.getComputedStyle(truck).getPropertyValue("left") //to get the left portion of truck
  );
  if (truckLeft < 30 && truckLeft > -30 && blindTop >= 130) {
    truck.style.animation = "none";
    document.getElementById("screamSound").play();
    document.getElementById("hornSound").pause();

    alert(
      "You've hit the Chintu. Drive carefully! score: " +
        Math.floor(counter / 100)
    );
    counter = 0;
    document.getElementById("screamSound").pause();
    //to move truck from right to left
    truck.style.animation = "truck 1s infinite linear";
    document.getElementById("highScore").innerHTML = Math.max(
      document.getElementById("scoreSpan").innerHTML
    );
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
