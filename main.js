$(document).ready(
    function(){
        $('#button').click(
            function(){
                var adicionar = $('input[name=ListItem]').val();
                $('ol').append('<li>' + adicionar + '</li>');
        });

    $("input[name=ListItem]").keyup(function(event){
        if(event.keyCode == 13){
            $("#button").click();
        }         
    });

    $(document).on('click','li', function(){
        $(this).toggleClass('strike');  
    });

    $('input').focus(function() {
        $(this).val('');
    });

    $('ol').sortable();  
    }
);