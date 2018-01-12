$(document).ready(function(){
    $('#toggleSidebar').on('click',function(){
        console.log("button clicked");
        $('#sidebar').toggleClass('active');
    });
})