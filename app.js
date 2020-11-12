window.onload = function() {
    var httpRequest = new XMLHttpRequest();
    var button = document.getElementsByClassName("btn");

    button[0].addEventListener("click", function(e) {

        e.preventDefault();
        var url = "http://localhost/info2180-lab4/superheroes.php";
        var hero = document.getElementById("input").value;
        httpRequest.open('GET', url + "?q=Ironman", false);
        httpRequest.send();
        httpRequest.onreadystatechange = getMsg();

    });


    function getMsg() {
        console.log(httpRequest.status)
        if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200) {
            var response = httpRequest.responseText;
            var space = document.getElementById("result");
            space.innerHTML = response;
        } else {
            var msg = "Error. There is a problem.";
            msg = innerHTML = msg;
        }
    }


}