var myObj = [5, [22], [[14]], [[4]],[5,6]]
var Arr = [].concat.apply([], myObj);
//console.log(Arr);
var Arr1=[].concat.apply([],Arr);
console.log(Arr1);
