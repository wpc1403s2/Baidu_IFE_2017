/**
 * Created by wpc on 2017/3/6.
 */
var txt=document.getElementById('txt');
var tip=document.getElementById('tip');
var btn=document.getElementsByTagName('button')[0];
var txtStr=txt.value;
txt.onfocus=function(){
    txt.className="";
    tip.innerHTML="必填，长度为4到16个字符"
}
btn.onclick=function () {
        var len=0;//储存长度
        var c=0;//每一个字符到编码
        for(var i=0;i<txt.value.length;i++){
            c=txt.value.charCodeAt(i);
            console.log(c);
            if(c>=0&&c<=127){
                len++;
            }
            else{
                len+=2;
            }
        }
        if(len>=4&&len<=16){
            tip.innerHTML="名称格式正确";
            txt.className="right"
        }else if(len==0){
            tip.innerHTML = "姓名不能为空";
            txt.className="wrong"
        }else {
            tip.innerHTML="长度为4到16个字符";
            txt.className="wrong"
        }

    }


