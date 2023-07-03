//your JS code here. If required.
function updateSize() {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      var sizeTextElement = document.getElementById("sizeText");
      sizeTextElement.textContent = "Width: " + width + " Height: " + height;
    }

    // Initial call to update the size information
    updateSize();

    // Event listener for window resize
    window.addEventListener("resize", updateSize);