/**
 * Created by wpc on 2017/3/7.
 */


function radioChange() {
    if(document.getElementById('std_input').checked){
        document.querySelector('#outSchool').className = "hide";
        document.querySelector('#inSchool').className='';
    }else{
        document.querySelector('#outSchool').className = "";
        document.querySelector('#inSchool').className='hide';
    }
}
function selCistict() {
    var data={
        bj:['北京大学1','北京大学2','北京大学3','北京大学4'],
        tj:['天津大学1','天津大学2','天津大学3','天津大学4'],
        cd:['四川大学1','四川大学2','四川大学3','四川大学4'],
    };
    var source=document.querySelector('#source');
    var seleced=source.options[source.selectedIndex].value;
    // console.log('selected  ' + seleced);
    // console.log(data[seleced].length);
    var target = document.querySelector('#target');
    target.innerHTML='';
    for(var i=0;i<data[seleced].length;i++){
        var option = document.createElement('option');
        option.value=data[seleced][i];
        option.innerHTML=data[seleced][i];
        target.appendChild(option);
    }
}
