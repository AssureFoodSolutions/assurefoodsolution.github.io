
$(document).ready(function(){
   
    $("#submit-form").validate({
        rules:{

            name:{
                required:true
            },

            Email:{
                required:true,
                email:true
            },
            Contactno:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10

            },
            message:{
                required:true,
            }


        }

    })
    

})