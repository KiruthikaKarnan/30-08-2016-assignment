var n1=function(n){
  
var a=0;
var b=0;
var c=0;
var d;
for(a=0;a<=n;a++){
  d=' ';

  for(b=0;b<n-a;b++){
    d+=' ';
  }
  for(c=0;c<a;c++){
    d+=' *';

  }
console.log(d);
}

}
console.log(n1(5));
