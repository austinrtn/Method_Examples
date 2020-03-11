function doEx1(){
  let num = $("#ex1").val();
  let reverseAr = [];
  for(var i = num.length-1; i >= 0; i--) reverseAr.push(num[i]);
  $("#output").val(reverseAr.join(""));
}

function doEx2(){
  let str = $("#ex2").val();
  let reverseAr = [];
  let result = false;
  for(var i = str.length-1; i >= 0; i--) reverseAr.push(str[i]);

  if(str === reverseAr.join(""))
    result = true;
  $("#output").val(result);
}

function doEx3(){
  var str1 = $("#ex3").val();
  var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++)
  {
   array1[x]=str1.substring(x, y);
    }
  var combi = [];
  var temp= "";
  var slent = Math.pow(2, array1.length);

  for (var i = 0; i < slent ; i++)
  {
      temp= "";
      for (var j=0;j<array1.length;j++) {
          if ((i & Math.pow(2,j))){
              temp += array1[j];
          }
      }
      if (temp !== "")
      {
          combi.push(temp);
      }
  }
  $("#output").val(combi.join("\n"));
}

function doEx4(){
  $("#output").val($("#ex4").val().split('').sort().join(''));
}

function doEx5(){
  var array = $("#ex5").val().split(' ');
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    var word = array[i];
    var newWord = word.replace(word[0], word[0].toUpperCase());
    newArray.push(newWord);
  }
  $("#output").val(newArray.join(" "));
}

function doEx6(){
  var array = $("#ex6").val().split(' ');
  var lengthAr = [];

  for(var a of array) lengthAr.push(a.length)

  var largest = Math.max(...lengthAr)

  for (var i = 0; i < lengthAr.length; i++)
    if(lengthAr[i] === largest)   $("#output").val(array[i]);
}

function doEx7(){
  let str = $("#ex7").val().toLowerCase();
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for(var i = 0; i < str.length; i++) if(vowels.includes(str[i])) count++;

  $("#output").val(count);
}

function doEx8(){
  let num = parseInt($("#ex8").val());
  var result = "Is Prime"
  for(var i = 0; i < num; i++){
    if(num % i === 0 && i != 1 || num == 2){
    result = "Not Prime";
    break;
    }
  }
  $("#output").val(result);
}

function doEx10(){
  let matrix = parseInt($("#ex10").val());
  let output = "";
  for(var i = 0; i < matrix; i++){
    for(var x = 0; x < matrix; x++)
      if(i===x) output += "X";
      else output += "O";
    output += "\n";
}
    $("#output").val(output);

}
