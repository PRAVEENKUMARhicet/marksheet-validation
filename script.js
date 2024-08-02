var marks = document.getElementsByClassName('mark');
var total = document.getElementById('percentage');
var totalmark=document.getElementById('grandtotal');
var word=document.getElementsByClassName('words');
var result=document.getElementById('grade');
var totalmarks = 0;

for (let i = 0; i < marks.length; i++) {
    marks[i].addEventListener('keyup', update);
}

function update() {
    totalmarks = 0;
    var subject = document.getElementsByClassName('subject-mark');

    for (let i = 0; i < marks.length; i++) {
        if(marks[i]>100)
            alert("enter a valid mark");
        var mark = parseFloat(marks[i].value) || 0;
        totalmarks += mark;
        subject[i].innerHTML = mark;
    }
    words(totalmarks);
    grandtotal(totalmarks);
    percentage(totalmarks);
}

function percentage(totalmarks) {
    let percentage = marks.length > 0 ? totalmarks / marks.length : 0;
    total.innerHTML = percentage.toFixed(2)+"%";
    grade(percentage);
}

function grandtotal(totalmarks){
    totalmark.innerHTML=totalmarks;
}

function words(num) {
    if (num === 0) 
        return "zero";

    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const tens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const hundreds = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const thousands = ["", "thousand", "million", "billion"];
    let words = "";
    let i = 0;

    while (num > 0) {
        let rem = num % 1000;
        if (rem > 0) {
            words = convertHundreds(rem) + " " + thousands[i] + " " + words;
        }
        num = Math.floor(num / 1000);
        i++;
    }
    
    function convertHundreds(num) {
        let result = "";
        if (num > 99) {
            result += ones[Math.floor(num / 100)] + " hundred ";
            num %= 100;
        }
        if (num > 19) {
            result += hundreds[Math.floor(num / 10)] + " ";
            num %= 10;
        }
        if (num > 9) {
            result += tens[num - 10] + " ";
        } else if (num > 0) {
            result += ones[num] + " ";
        }
        return result;
    }
    console.log(words);
    for(let i=0;i<word.length;i++)
        word[i].innerHTML=words;
}

function grade(percentage){
    var res="";
    if(percentage>=90 && percentage<=100){
        res="A";
    }
    else if(percentage>=60 && percentage<90)
        res="B"
    else if(percentage>=35 && percentage<60)
        res="c";
    else
        res="F";
    result.innerHTML=res;
}