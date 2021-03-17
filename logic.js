$(function () {
    let i = 0;
    $('#asteroid').click(function () {
        i++;
        console.log(i)
        if (i == 3) {
            document.getElementById("asteroid").src = "images/a2.png"
        }
        else if (i == 6) {
            document.getElementById("asteroid").src = "images/a3.png"
        }
        else if (i == 10) {
            document.getElementById("asteroid").src = "images/explosion.png"
        }
    });
});
