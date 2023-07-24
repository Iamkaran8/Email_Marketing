//Form Validation

$(document).ready(function () {
    $('#submit').on('click', function () {
        if ($('#name').val() == "") {
            $("#n-hint").html("*Enter Your name").css("color", "red");
        } else {
            $('#n-hint').hide()
        }


  
      let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
      let result = regex.test($("#email").val());
      if (result) {
        $("#e-hint").html("");
      } else {
        $("#e-hint").html("Enter valid MailID").css('color','red');
      }


        if ($('#number').val() == "") {
            $("#num-hint").html("*Enter Your Mobile number").css("color", "red");
        } else {
            $('#num-hint').hide()
        }


        if ($('#Company').val() == "") {
            $("#c-hint").html("*Enter Your Company Name").css("color", "red");
        } else {
            $('#c-hint').hide()
        }


        if ($('#url').val() == "") {
            $("#url-hint").html("*Enter Your URL").css("color", "red");
        } else {
            $('#url-hint').hide()
        }
    })
});



// $(document).ready(function () {
//     $('#hoverBox')
//     .bind('mouseover',function(mouseover) {
//         var val = $('span').val()
//         $("span").hide();
//         $('#hoverBox').text("hai")
//     })
//     .bind('mouseleave',function(mouseover) {
//         $("span").show(val);
//     });

// });