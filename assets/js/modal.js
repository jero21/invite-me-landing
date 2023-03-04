
var modal = document.getElementById("myModal"); // Get the modal

function reply_click(clicked_id)
  {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(clicked_id);
    var modalImg = document.getElementById("img01");
    //var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    //captionText.innerHTML = img.alt;
  }


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
