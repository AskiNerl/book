const snowCount = 60;

for (let i = 0; i < snowCount; i++) {
    let snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.innerText = "❄";

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = 2 + Math.random() * 3 + "s";
    snow.style.opacity = Math.random();
    snow.style.fontSize = 10 + Math.random() * 20 + "px";

    document.body.appendChild(snow);
}

const faders = document.querySelectorAll('#Anim');


const appearOptions = {
  threshold: 0.1, 
  rootMargin: "0px 0px -50px 0px" 
};


const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show'); 
    observer.unobserve(entry.target); 
  });
}, appearOptions);


faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

