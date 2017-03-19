/**
 * Created by wpc on 2017/3/16.
 */
var data=[{
    name:'小明',
    Chinese:90,
    Math:80,
    English:85
},{
    name:'小华',
    Chinese:90,
    Math:83,
    English:60
},{
    name:'小红',
    Chinese:99,
    Math:87,
    English:65
},{
    name:'小芳',
    Chinese:70,
    Math:88,
    English:85
}];

$(function () {
    //动态创建表格
    var str="";
    for(var i=0;i<data.length;i++){
        var Chinese=data[i].Chinese;
        var Math=data[i].Math;
        var English=data[i].English;
        var total=Chinese+Math+English;
        str+="<tr>"
        str+="<td>"+data[i].name+"</td>"
        str+="<td>"+Chinese+"</td>"
        str+="<td>"+Math+"</td>"
        str+="<td>"+English+"</td>"
        str+="<td>"+total+"</td>"
        str+="</tr>"
    }
    $("#grades").html(str);
})












