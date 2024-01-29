function delay(func) {
  let timer;
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(func, 1000);
}

window.addEventListener("scroll", debounce(handleScroll));

function debounce(func) {
  let lastScrollPosition = window.scrollY;
  let timer;

  return (event) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(handleScroll, 50, event, lastScrollPosition);
    lastScrollPosition = window.scrollY;
  };
}

function handleScroll(e, lastScrollPosition) {
  const $header = document.querySelector(".header");
  const actualScrollPosition = window.scrollY;

  if (actualScrollPosition > lastScrollPosition) {
    // On scroll down
    $header.classList.add("collapsed");
    console.log(actualScrollPosition - lastScrollPosition);
  } else {
    // On scroll up
    $header.classList.remove("collapsed");
    console.log(actualScrollPosition - lastScrollPosition);
  }
}
