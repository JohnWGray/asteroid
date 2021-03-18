
$(function () {
    let i = 0;
    $('#asteroid').click(function () {
        i++;

        if (i == 1) {
            $(this).attr("src", "images/a1.png")
        }

        else if (i == 2) {
            $(this).attr("src", "images/a2.png")
        }
        else if (i == 3) {
            $(this).attr("src", "images/a3.png")
        }

        else if (i == 4) {
            $(this).attr("src", "images/a4.png")
        }

        else if (i == 5) {
            $(this).hide()
            var explosion = $('<img id="fireball">');
            explosion.attr('src', "images/fire.png");
            explosion.appendTo('.board');

            $("#fireball").animate(
                {
                    height: 'auto',
                    width: '800px',
                },

                {
                    duration: 300

                },

            );

            $('#fireball').fadeOut(300);

        }

    });

});
