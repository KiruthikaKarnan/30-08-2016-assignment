var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

 var arr=[];
 for(var i=0;i<myObj.length;i++){
   arr[i]=myObj[i];
 }

for(var j=0;j<arr.length;j++){

    if(arr[j].occupation=="Programmer"){
      console.log(arr[j]);
    }
}


var agearr=[];
console.log("Sorted by age");
for(var i=0;i<myObj.length;i++){
  agearr[i]=myObj[i].age;
}
console.log(agearr.sort().reverse());

for(var j=0;j<myObj.length;j++){

  for(var k=0;k<agearr.length;k++){
    if(myObj[k].age==agearr[j]){

      console.log(myObj[k]);
    }
  }
}

var newar=[];

var newobj=[];
var newobj1=[];
for(var a=0;a<myObj.length;a++)
{
newar[a]=myObj[a];
}

var y=0;
var temp={"Team Leader":newobj,
	   "Programmer":newobj1	};
var temp1=Object.create(null);

for(var t=0;t<myObj.length;t++)
{
if(newar[t].occupation=="Team Leader")
{
temp1=newar[t];
delete temp1.occupation;
newar[t]=temp1;
newobj[y]=newar[t];
y++;
}
}

var y=0;
for(var t=0;t<myObj.length;t++)
{
if(newar[t].occupation=="Programmer")
{
temp1=newar[t];
delete temp1.occupation;
newar[t]=temp1;
newobj1[y]=newar[t];
y++;
}
}


console.log(temp);
