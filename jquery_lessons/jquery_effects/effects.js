// function divFade() { 
//     $("div").slideUp("2000", function() {
//     $(this).remove() 
// })}

// $("button").on("click", divFade);

function divSlide() {
    $("div").slideToggle(9000, function() {
        console.log("slow slide");
    })
}

$("button").on("click", divSlide);