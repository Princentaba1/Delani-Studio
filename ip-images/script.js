$(document).ready(function() {

    $(".hide-design-image").click(function(){
     $(".random").show();
     $(this).hide();
    })
  $(".random").click(function(){
    $(".hide-design-image").show();
    $(this).hide();
  })
  $(".hide-development-image").click(function(){
    $(".random2").show();
    $(this).hide();
   })
 $(".random2").click(function(){
   $(".hide-development-image").show();
   $(this).hide();
 })
 $(".hide-product-image").click(function(){
  $(".random3").show();
  $(this).hide();
 })
$(".random3").click(function(){
 $(".hide-product-image").show();
 $(this).hide();
})
  
   

  
    //Insert white box upon hover
    $("#work1").hover(function(){
      $(this).css("opacity","0.3");
      $("#Hover_design").show();
    },function(){
      $(this).css("opacity","1")
      $("#Hover_design").hide();
    })
    $("#work2").hover(function(){
      $(this).css("opacity","0.3");
      $("#Hover_design2").show();
    },function(){
      $(this).css("opacity","1")
      $("#Hover_design2").hide();
    })
    $("#work3").hover(function(){
      $(this).css("opacity","0.3");
      $("#Hover_design3").show();
    },function(){
      $(this).css("opacity","1")
      $("#Hover_design3").hide();
    })
    $("#work4").hover(function(){
      $(this).css("opacity","0.3");
      $("#Hover_design4").show();
    },function(){
      $(this).css("opacity","1")
      $("#Hover_design4").hide();
    })
    $("#work5").hover(function(){
      $(this).css("opacity","0.3");
      $("#Hover_design5").show();
    },function(){
      $(this).css("opacity","1")
      $("#Hover_design5").hide();
    })
    $("#work6").hover(function(){
      $(this).css("opacity","0.3");
      $("#Hover_design6").show();
    },function(){
      $(this).css("opacity","1")
      $("#Hover_design6").hide();
    })
    $("#work7").hover(function(){
      $(this).css("opacity","0.3");
      $("#Hover_design7").show();
    },function(){
      $(this).css("opacity","1")
      $("#Hover_design7").hide();
    })
    $("#work8").hover(function(){
      $(this).css("opacity","0.3");
      $("#Hover_design8").show();
    },function(){
      $(this).css("opacity","1")
      $("#Hover_design8").hide();
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