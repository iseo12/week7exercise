function btnClick() {
  var inputValue = document.getElementById('input-bar').value;
  console.log(inputValue);
  document.getElementById('input-value').innerHTML = inputValue;
}

var a = ["heading1","heading2","heading3","heading4","heading5"];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

var b = {
  prop1: "one",
  prop2: "two",
  prop3: "three"
};

console.log(b.prop1);
console.log(b.prop2);
console.log(b.prop3);

var c = [
  {
    prop1: "0",
    prop2: "1",
    prop3: "2"
  },
  {
    prop1: "3",
    prop2: "4",
    prop3: "5"
  },
  {
    prop1: "6",
    prop2: "7",
    prop3: "8"
  }
];

for (let i = 0; i < c.length; i++) {
  console.log(c[i].prop1);
  console.log(c[i].prop2);
  console.log(c[i].prop3);
}

document.body.style.color = "red";
