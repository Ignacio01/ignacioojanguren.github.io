function scrollBackHome(){
    $('html, body').animate({
        scrollTop: $("#topPage").offset().top
    }, 1000);
}

function scrollPageAboutMe(){
    $('html, body').animate({
        scrollTop: $("#description").offset().top
    }, 1000);
}

function scrollInternship(){
    $('html, body').animate({
        scrollTop: $("#internship").offset().top
    }, 1000);
}

function contactMe(){
    $('html, body').animate({
        scrollTop: $("#contactMe").offset().top
    }, 1000);
}
