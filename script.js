let dogs=[];
let picture=(".picture-url");

$('.add').click(function() {
    picture=$(".picture-url").val();
    dogs.push(picture);
    $(".dogslist").append("<img src="+picture+">");
});