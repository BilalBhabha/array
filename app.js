function funCall(){
     var myArray=[
        {Name:'Bilal', Id:1, RollNo:  1,Marks:99,Ispass:'True'},
        {Name:'Hassan', Id:2,RollNo : 2,Marks:45 ,Ispass:'False'},
        {Name:'Adil', Id:3, RollNo: 3,Marks:70,Ispass:'True'},
        {Name:'Humza', Id:4,RollNo: 4,Marks:80,Ispass:'True'},
        {Name:'Raheel', Id:5,RollNo: 5,Marks:39,Ispass:'False'},
     ]
    var html ="<table border '1|1>'"
    setTimeout(() =>{
        html+='<thead>';
        html+='<tr>';
        html+='<td>'+'RollNo'+'</td>'
        html+='<td>'+'Name'+'</td>'
        html+='<td>'+'Result'+'</td>'
        html+='<td>'+'Marks'+'</td>'
        html+='</tr>'
        html+='</thead>'
        for(var i =0 ; i<myArray.length; i++){
            html+='<tr>';

            html+='<td>'+myArray[i].RollNo+'</td>';
            html+='<td>'+myArray[i].Name+'</td>';
            html+='<td>'+myArray[i].Ispass+'</td>';
            html+='<td>'+myArray[i].Marks+'</td>';
            html+='</tr>';
        }

        document.getElementById("table").innerHTML =html
    },500);
}

funCall()