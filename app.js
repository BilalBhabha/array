function funCall(){
     var myArray=[
        {Name:'Bilal', Id:1, Age:17},
        {Name:'Hassan', Id:2, Age:11},
        {Name:'Adil', Id:3, Age:19},
        {Name:'Humza', Id:4, Age:15},
        {Name:'Rahil', Id:5, Age:16},
     ]
    var html ="<table border '1|1>'"
    setTimeout(() =>{
        html+='<thead>';
        html+='<tr>';
        html+='<td>'+'Id'+'</td>'
        html+='<td>'+'Name'+'</td>'
        html+='<td>'+'Age'+'</td>'
        html+='</tr>'
        html+='</thead>'
        for(var i =0 ; i<myArray.length; i++){
            html+='<tr>';
            html+='<td>'+myArray[i].Id+'</td>';
            html+='<td>'+myArray[i].Name+'</td>';
            html+='<td>'+myArray[i].Age+'</td>';
            html+='</tr>';
        }

        document.getElementById("table").innerHTML =html
    },500);
}
funCall()