console.log("Under construction");

var fruit = "apples are wonderful";
console.log(fruit);

var year = 2023;
console.log(year);

window.onload = function(){
    $(".title").css("color", "green");

    $(".green-box").click(changeColor);
    // changeColor(); // awaken the system for the function below

    $(".rock").click(openDialog);
    $(".dialog").click(closeDialog);
    $(".seed").hover(seedGrow, seedShrink);

    $(".rock").draggable();


    for(var i=0; i < 100; i++){
        var worm = $('<img class="worm" src="../img/3JmtD7T.gif">');

        var randTop = Math.random() * window.innerHeight;
        var randLeft = Math.random() * window.innerWidth;  

        $(worm).css("top", randTop + "px");
        $(worm).css("left", randLeft + "px");

        $("body").append(worm);

    }

    setInterval(wormMove, 5000);
}


function openDialog(){
    $(".dialog").css("display", "block");
}

function closeDialog(){
    $(".dialog").css("display", "none");

}

function seedGrow(){
    $(".seed").attr("src", "../img/seedling.png");
    $(".seed").css("width", "100px");
    $(".seed").css("height", "100px");
    $(".seed").css("top", "100px;");
    $(".seed").css("left", "100px");

}

function seedShrink(){
    $(".seed").attr("../img/Single-Seed-e1679430245757.webp");
    $(".seed").css("width", "100px");
    $(".seed").css("height", "100px");
    $(".seed").css("top", "100px;");
    $(".seed").css("left", "100px");
}

function wormMove(){
$("worm").each(function(){
    var randTop = Math.random() * window.innerHeight;
    var randLeft = Math.randomm() * window.innerWidth;   

    $(this).css("top", randTop + "px");
    $(this).css("left", randLeft + "px");

    })
}

















function changeColor(){
    $(".green-box").css("height", "500px");
    $(".green-box").css("width", "500px");
    $(".green-box").css("left", "800px");
    $(".green-box").css("background", "cyan");

}
