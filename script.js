$(document).ready(function () {
    $("#start-card").click(function () {
        $(".pokertitle, .poker-content, .poker-start").removeClass("active").addClass("disable");
        $(".deck").removeClass("disable");
    });

    function resetCards() {
        $('#start-spades, #start-hearts, #start-diamonds, #start-clubs').removeClass('active');
        $('#start-spades').attr('src', 'img/card1.png');
        $('#start-hearts').attr('src', 'img/card2.png');
        $('#start-diamonds').attr('src', 'img/card3.png');
        $('#start-clubs').attr('src', 'img/card4.png');
    }

    function resetInfo() {
        $("#info-spades, #info-hearts, #info-diamonds, #info-clubs").addClass("disable");
    }

    function onToken() {
        $("#token").removeClass("disable");
    }

    function updateInfo(infoSelector) {
        resetInfo();
        $(infoSelector).removeClass("disable");
        onToken()
    }

    function updateCardInfo(cardSelector, cardImage) {
        resetCards();
        $(cardSelector).addClass("active");
        $(cardSelector).attr('src', cardImage + '-after.png');
    }    

    $("#start-card, #start-spades, #start-hearts, #start-diamonds, #start-clubs").click(function () {
        resetCards();
        resetInfo();
    });

    $("#start-spades").click(function () {
        updateCardInfo("#start-spades", 'img/card1');
        setTimeout(function () {
            updateInfo("#info-spades");
        }, 500); 
    });

    $("#start-hearts").click(function () {
        updateCardInfo("#start-hearts", 'img/card2');
        setTimeout(function () {
            updateInfo("#info-hearts");
        }, 500);
    });

    $("#start-diamonds").click(function () {
        updateCardInfo("#start-diamonds", 'img/card3');
        setTimeout(function () {
            updateInfo("#info-diamonds");
        }, 500);
    });

    $("#start-clubs").click(function () {
        updateCardInfo("#start-clubs", 'img/card4');
        setTimeout(function () {
            updateInfo("#info-clubs");
        }, 500);
    });

    $("#token").click(function () {
        $("#token").addClass("disable");
        resetInfo();
        resetCards();
    });
});