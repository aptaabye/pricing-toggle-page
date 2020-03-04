$(document).ready(function() {
  $('#example_1').on('change', function() {
    if (this.checked === true){
      $("#basic .dollar").text("$19.99");
      $("#professional .dollar").text("$24.99");
      $("#master .dollar").text("$39.99");
    }
    else if(this.checked != true) {
      $("#basic .dollar").text("$199.99");
      $("#professional .dollar").text("$249.99");
      $("#master .dollar").text("$399.99");
    }
  });
});
