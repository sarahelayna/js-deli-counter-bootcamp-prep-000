var katzDeli = [];

function takeANumber (katzDeli, name) {
    katzDeli.push(name);
    return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}

function nowServing () {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
      return katzDeli[0];
  }
  katzDeli.splice(0);
}

function currentLine (katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    return "The line is currently:"  katzDeli
  }
}
