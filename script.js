var rect = document.querySelector("#box");

rect.addEventListener("mousemove", function (dets) {
   var rectanglelocation = rect.getBoundingClientRect();
   var insiderctval = dets.clientX - rectanglelocation.left;

   if (insiderctval < rectanglelocation.width / 2) {
      var redcolor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0, insiderctval);
      gsap.to(rect, {
         backgroundColor: `rgb(${redcolor}, 0, 0)`,
         ease: Power4,
      });
   }
   else {
      var bluecolor = gsap.utils.mapRange(rectanglelocation.width / 2, rectanglelocation.width, 0, 255, insiderctval);
      gsap.to(rect, {
         backgroundColor: ` rgb(0, 0, ${bluecolor})`,
         ease: Power4,
      });
   }
});

