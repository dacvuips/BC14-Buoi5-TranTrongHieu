// BÀI 1 :QUẢN LÝ SINH VIÊN

document.getElementById('result').addEventListener('click', result);

function result() {
    var point1 = document.getElementById('point1').value;
    var point2 = document.getElementById('point2').value;
    var point3 = document.getElementById('point3').value;
    var benchmark = document.getElementById('benchmark').value;
    var point = +point1 + +point2 + +point3
    var resultArea = area();
    var resultObject = object();
    var total = +point + +resultArea + +resultObject;
    if (point1 > 0 && point2 > 0 && point3 > 0) {
        if (+total >= benchmark) {
            var result = "Đậu"
        } else {
            var result = "Rớt"
        }
    } else
    if (point1 == 0 || point2 == 0 || point3 == 0) {
        var result = "Rớt"
    }
    var resultFinsh = document.getElementById('resultFinsh');
    resultFinsh.style.display = "block";
    var resultP1 = document.getElementById('resultP1');
    resultP1.innerHTML = point1;
    var resultP2 = document.getElementById('resultP2');
    resultP2.innerHTML = point2;
    var resultP3 = document.getElementById('resultP3');
    resultP3.innerHTML = point3;
    var resultArea = document.getElementById('resultArea');
    resultArea.innerHTML = area();
    var resultObject = document.getElementById('resultObject');
    resultObject.innerHTML = object();
    var resultBenchmark = document.getElementById('resultBenchmark');
    resultBenchmark.innerHTML = benchmark;
    var resultTotal = document.getElementById('resultTotal');
    resultTotal.innerHTML = total;
    var resultP = document.getElementById('resultP');
    resultP.innerHTML = result;
}

function area() {

    var areaA = document.getElementById('areaA').checked;
    var areaB = document.getElementById('areaB').checked;
    var areaC = document.getElementById('areaC').checked;
    var areaX = document.getElementById('areaX').value;

    if (areaA) {
        return 2;
    }
    if (areaB) {
        return 1;
    }
    if (areaC) {
        return 0.5;
    }
    if (areaX == "X" || areaX == "x" || areaX == "") {
        return 0;
    }
}

function object() {

    var object1 = document.getElementById('object1').checked;
    var object2 = document.getElementById('object2').checked;
    var object3 = document.getElementById('object3').checked;
    var object0 = document.getElementById('object0').value;

    if (object1) {
        return 2.5;
    }
    if (object2) {
        return 1.5;
    }
    if (object3) {
        return 1;
    }
    if (object0 == 0) {
        return 0;
    }
    if (object0 == 0) {
        return 0;
    }
}

// BÀI 2 :TÍNH TIỀN ĐIỆN
document.getElementById('results').addEventListener('click', electri);


function electri() {
    var electriName = document.getElementById('electriName').value;
    var electriNumber = document.getElementById('electriNumber').value;
    const KWFIRST = 500;
    const KWSECONS = 650;
    const KW100 = 850;
    const KW150 = 1100;
    const KW350 = 1300;
    var electricResult = 0;

    if (electriNumber <= 50) {
        electricResult = +electriNumber * KWFIRST;

    } else if (electriNumber > 50 && electriNumber <= 100) {

        electricResult = (50 * KWFIRST) + ((electriNumber - 50) * KWSECONS);

    } else if (electriNumber > 100 && electriNumber <= 200) {

        electricResult = (50 * KWFIRST) + (50 * KWSECONS) + ((electriNumber - 100) * KW100);

    } else if (electriNumber > 200 && electriNumber <= 350) {

        electricResult = (50 * KWFIRST) + (50 * KWSECONS) + (100 * KW100) + ((electriNumber - 150) * KW150);

    } else if (electriNumber > 350) {

        electricResult = (50 * KWFIRST) + (50 * KWSECONS) + (100 * KW100) + (150 * KW150) + ((electriNumber - 350) * KW350);

    }




    var resultFinshs = document.getElementById('resultFinshs');
    resultFinshs.style.display = "block";
    var P1 = document.getElementById('P1');
    P1.innerHTML = electriName;
    var P2 = document.getElementById('P2');
    P2.innerHTML = electriNumber;
    var P3 = document.getElementById('P3');
    P3.innerHTML = electricResult + " VNĐ";


}