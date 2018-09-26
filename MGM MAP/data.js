////////////////////////////////////////////////////////////
//////////////////JQUERY METHOD ////////////////////////////////
////////////////////////////////////////////////////////
$(document).ready(function(){

    var ilce_dizi=[];
    $.getJSON("data.json", function(data){
        
        
        $.each(data, function(index, value){
           ilce_dizi.push({
            ilce : value['ilce'],
            enlem : value['enlem'],
            boylam : value['boylam'],
           }) 
            
         })
    })
    console.log(ilce_dizi)
});



////////////////////////////////////////////////////////////////////
//////////////////////////// METHOD 2 ///////////////////////////////
/////////////////////////////////////////////////////////////////////
var ilce_dizi=[];

async function getilceler(){
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

getilceler().then(data=> data.map(value => { 
            
            ilce_dizi.push({
            ilce : value['ilce'],
            enlem : value['enlem'],
            boylam : value['boylam'],
           });
        })
);