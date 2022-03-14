$(document).ready(function() {

    $(".hide-design-image").click(function(){
     $(".random").show();
     $(this).hide();
    })
  $(".random").click(function(){
    $(".hide-design-image").show();
    $(this).hide();
  })
    $("#development").click(function(){
      $("#development-showing").toggle();
      $(".hide-development-image").toggle();
    })
  
    $("#productManagement").click(function(){
      $("#product-management-showing").toggle();
      $(".hide-product-management").toggle();
    })

  
    //Insert white box upo hover
    $(".Hover").hover(function(){
      $(this).animate({opacity:'1'});
    },
    function(){
      $(this).animate({opacity:'0'});
    })
    $('.submit').click(function () {
        let Name = $('#mce-FNAME').val();
        let Email = $('#mce-EMAIL').val();
        let Message = $('#mce-MESSAGE');
        // let key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }
  });
});