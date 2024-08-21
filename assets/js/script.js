AOS.init({
  duration: 1000,
})

const copyrightYear = document.getElementById("copyright-year");
copyrightYear.innerHTML = `&copy; ${new Date().getFullYear()} Fernando Gonçalves`;