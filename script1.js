$("#form validation").validate({
   rules:{
   name:{
    minlength:2
   }
},
   messages:{
    required:"please enter your name",
    minlength:"Name atleast 2 characters"
   },


    submitHandler: function(form) {
      form.submit();
    }
   });