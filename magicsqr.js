var s = document.getElementsByTagName("td");
s[4].style.color = "red";

var matrix0 = [];
var main_num = Math.round(Math.random() * 100 / 3);
var a = Math.round(Math.random() * 1.5 * main_num);
var b = Math.round(Math.random() * 1.5 * main_num);
var c = 3 * main_num - a - b;
var d = 3 * main_num - a - c;
matrix0.push(main_num, a, b, c, d, 2 * main_num - a, 2 * main_num - b, 2 * main_num - c, 2 * main_num - d);

var n = 0;
sum0 = document.getElementById("sum");
sum0.textContent = String(main_num * 3);

sweep = function(key, s) {
    function check_and_switch(td_arr) {
        return function() {
            for (var i = 0; i < td_arr.length; i++) {
                if (s[td_arr[i]].style.color == "red") {
                    var f0 = s[td_arr[i]].textContent;
                    s[td_arr[i]].textContent = s[key].textContent;
                    s[td_arr[i]].style.color = "black";
                    s[key].textContent = f0;
                    s[key].style.color = "red";
                }
            }
            //check..
            var s0 = document.getElementsByTagName("td");
            var m = [];
            for (var k in s0) {
                if (s0.hasOwnProperty(k)) {
                    var element = Number(s0[k].textContent);
                    m.push(element);
                }
            }
            r = [m[0] + m[1] + m[2],
                m[3] + m[4] + m[5],
                m[6] + m[7] + m[8],
                m[0] + m[3] + m[6],
                m[1] + m[4] + m[7],
                m[2] + m[5] + m[8],
                m[0] + m[4] + m[8],
                m[2] + m[4] + m[6]
            ];
            if (r.every(function(p) { return p == (main_num * 3); })) {
                alert("WOW You make it,\n If you wanna tell me:\n mail to: eng-yasinyousif+[at]+hotmail");
            }
        };
    }
    //console.log(key);
    switch (Number(key)) {
        case 0:
            return check_and_switch([1, 3]);
        case 1:
            return check_and_switch([0, 2, 4]);

        case 2:
            return check_and_switch([1, 5]);

        case 3:
            return check_and_switch([0, 4, 6]);

        case 4:
            return check_and_switch([1, 3, 5, 7]);

        case 5:
            return check_and_switch([2, 4, 8]);

        case 6:
            return check_and_switch([7, 3]);

        case 7:
            return check_and_switch([6, 4, 8]);

        case 8:
            return check_and_switch([5, 7]);

        default:
            break;
    }
}
for (var key in s) {
    if (s.hasOwnProperty(key)) {
        n = Math.round(Math.random() * (matrix0.length - 1));
        s[key].textContent = matrix0.splice(n, 1);
        s[key].onclick = sweep(key, s);
    }
}