function multiply() {
  for (var l = 100; l <= 200; l++) {
    if (l % 4 === 0 && l % 3 === 0) {
      console.log("LoopyLighthouse");
    } else if (l % 4 === 0) {
      console.log("Lighthouse");
    } else if (l % 3 === 0) {
      console.log("Loopy");
    } else {
      console.log(l);
    }
  }
}

multiply();
