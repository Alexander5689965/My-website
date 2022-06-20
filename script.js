(function () {
    var old = console.log;
    var logger = document.getElementById('number');
    console.log = function () {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
            } else {
                logger.innerHTML += arguments[i] + '<br />';
            }
        }
    }
})();
function button() {
    return Math.floor(Math.random() * 5);
}
o = button(5)
p = button(5)
a = o + p
    function j() {
        return document.getElementById("number").innerHTML = `${o} + ${p} = ${a}`, document.getElementById("number").style.overflow = "hidden", o = button(5), p = button(5), a = o + p
    }

    function d() {
        return document.getElementById("number").innerHTML = "", document.getElementById("number").style.overflow = "hidden";
    }
    function k() {
        return document.getElementById("number").style.overflow = "visible";
    }
    document.getElementById("number").style.textAlign = 'center';
    button.addEventListener('click', j);
    button.addEventListener('dblclick', d);
    document.getElementById("button").value = "";