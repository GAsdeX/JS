// 3
function string() {
  let string = "JavaScript is a pretty good language";
  var splits = string.split(" ");
  var res = "";

  for (let i = 0; i < splits.length; i++) {
    let Name = splits[i];
    let First = Name.substring(0, 1).toUpperCase();
    let Leftovers = Name.substring(1, Name.length);
    res += First + Leftovers;
  }
}
string();

// 4
function doubleArray(a) {
  return a.concat(a);
}

var a = [1, 2, 3];
doubleArray(a);

