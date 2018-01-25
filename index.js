var katzDeliLine = [];

function takeANumber(katzDeliLine,name) {
<<<<<<< HEAD
   katzDeliLine.push(name)
   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length) {
      return `Currently serving ${katzDeliLine.shift()}.`;
  }
      return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
      return "The line is currently empty.";
  }
  //'The line is currently: 1. Bill, 2. Jane, 3.Ann'
  var txt =  "The line is currently:";
  for (var i = 0; i < katzDeliLine.length; i++) {
      txt += ` ${i + 1}. ${katzDeliLine[i]},`;
  }
  return txt.slice(0,-1);
}
=======
  return katzDeliLine.push(name);

}

function nowServing(){
  katzDeli.pop();
  return "There is nobody waiting to be served!";
}

function currentLine() {
  v
}
>>>>>>> eebb51f9b4446f4a042c2b453bb687d509fcc4e6
