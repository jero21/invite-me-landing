
var modal = document.getElementById("myModal"); // Get the modal
var imagen = document.getElementById("img01");
var video = document.getElementById("video01");

function reply_click(clicked_id)
  {
    // Get the image/video and insert it inside the modal - use its "alt" text as a caption
    var seleccionada = document.getElementById(clicked_id);

    if (seleccionada.tagName == 'IMG') {
      var modalImg = document.getElementById("img01");
    } else if (seleccionada.tagName == 'VIDEO') {
      var modalImg = document.getElementById("video01");
    }
    modal.style.display = "block";
    modalImg.src = seleccionada.src;
  }


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  video.src = ''
  imagen.src = ''
}
