var marks = document.getElementsByClassName('mark');
var total = document.getElementById('percentage');
var totalmark = document.getElementById('grandtotal');
var word = document.getElementsByClassName('words');
var result = document.getElementById('grade');
var resulttype=document.getElementById('result');
var totalmarks = 0;

for (let i = 0; i < marks.length; i++){
    marks[i].addEventListener('keyup', update);
}

function update() {
    totalmarks = 0;
    var subject=document.getElementsByClassName('subject-mark');
    
    for (let i = 0; i < marks.length; i++){
        var mark = parseFloat(marks[i].value) || 0;
        if (mark > 100) {
            alert("Enter a valid mark (0-100)");
            marks[i].value = '';
            mark = 0;
        }
        subject[i].innerHTML=mark;
        totalmarks += mark;
        word[i].innerHTML = words(mark);
    }
    word[word.length-1].innerHTML=words(totalmarks);
    grandtotal(totalmarks);
    percentage(totalmarks);
}

function percentage(totalmarks){
    let percentage = marks.length > 0 ? (totalmarks / (marks.length * 100)) * 100 : 0;
    total.innerHTML = percentage.toFixed(2) + "%";
    if(percentage<35)
        resulttype[0].innerHTML="Fail";
    else    
        resulttype.innerHTML[0]="Pass";

    grade(percentage);
}

function grandtotal(totalmarks){
    totalmark.innerHTML = totalmarks;
}

function words(num){
    if (num === 0) 
        return "zero";
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const hundreds = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    function converthundreds(num){
        let result1 = "";
        if (num > 99) {
            result1 += ones[Math.floor(num / 100)] + " hundred ";
            num %= 100;
        }
        if (num > 19) {
            result1 += hundreds[Math.floor(num / 10)] + " ";
            num %= 10;
        }
        if (num > 9) {
            result1 += tens[num - 10] + " ";
        } else if (num > 0) {
            result1 += ones[num] + " ";
        }
        return result1;
    }

    return converthundreds(num);
}

function grade(percentage) {
    var res = "";
    if (percentage >= 90) {
        res = "A";
    } 
    else if (percentage >= 60) {
        res = "B";
    } 
    else if (percentage >= 35) {
        res = "C";
    } 
    else if (percentage<35 && percentage>=0) {
        res = "F";
    }
    result.innerHTML = res;
}
