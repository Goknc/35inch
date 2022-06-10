var counter = 0
$(document).bind("mousewheel", function(event){
    if(event.originalEvent.wheelDelta > 0) {
        counter += 10
        console.log(counter)
        $('.gallery-box-outer').css({'transform':'perspective(1000px) rotateX(-8deg) rotateY('+counter+'deg)'})
        $('h1').html = ("hello")
    }
    else {
        counter -= 10
        console.log(counter)
        $('.gallery-box-outer').css({'transform':'perspective(1000px) rotateX(-8deg) rotateY('+counter+'deg)'})

    }
})



$('.gallery-box-in').hover(function(){
    $(this).toggleClass("opacity")
})



$('.gallery-box-in:nth-child(1)').hover(function(){
    $('h1').html('Lebron James')
})

$('.gallery-box-in:nth-child(2)').hover(function(){
    $('h1').html('Anthony Davis')
})

$('.gallery-box-in:nth-child(3)').hover(function(){
    $('h1').html('Russel Westbrook')
})

$('.gallery-box-in:nth-child(4)').hover(function(){
    $('h1').html('Carmelo Anthony')
})

$('.gallery-box-in:nth-child(5)').hover(function(){
    $('h1').html('Dwight Howard')
})

$('.gallery-box-in:nth-child(6)').hover(function(){
    $('h1').html('Malik Monk')
})

$('.gallery-box-in:nth-child(7)').hover(function(){
    $('h1').html('Avery Bradley')
})

$('.gallery-box-in:nth-child(8)').hover(function(){
    $('h1').html('Talen Horton-Tucker')
})

$('.gallery-box-in:nth-child(9)').hover(function(){
    $('h1').html('Austin Reaves')
})


