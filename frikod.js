(function () {
  let cookies = 0;
  let thrownCookies = 0;
  let bakedCookies = 0;

  let score = document.querySelector(".cookies");
  let throwScore = document.querySelector(".thrown");
  let bakeScore = document.querySelector(".baked");
  let eventText = document.querySelector(".eventText");

  document.getElementById("bakeCookie").addEventListener("click", () => {
    cookies += 5;
    score.innerText = cookies;
    bakedCookies += 5;
    bakeScore.innerText = "Baked " + bakedCookies + " cookies";
    if (bakedCookies > 100) {
      const event = new CustomEvent("bakedHundred");
      document.dispatchEvent(event);
      console.log(event && cookies);
    }
  });

  document.getElementById("throwCookie").addEventListener("click", () => {
    if (cookies >= 10) {
      cookies -= 10;
      score.innerText = cookies;
      thrownCookies += 10;
      throwScore.innerText = "Thrown " + thrownCookies + " cookies";
      if (thrownCookies > 30) {
        const event = new CustomEvent("thrownThirty");
        document.dispatchEvent(event);
        console.log(event && thrownCookies);
      }
    } else {
      console.log("Not enough cookies!");
    }
  });

  document.addEventListener("bakedHundred", () => {
    eventText.innerText = "Baked over 100 cookies! Congratulations!";
  });

  document.addEventListener("thrownThirty", () => {
    eventText.innerText = "Thrown over 30 cookies, how could you??";
  });
})();
