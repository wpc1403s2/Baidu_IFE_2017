/**
 * Created by wpc on 2017/3/16.
 */
var myevent=(function () {
    //在闭包里包裹私有变量
    var add,remove,toStr=Object.prototype.toString;

    function toArray(a) {
        //准备一个数组
        if (toStr.call(a) == '[object Array]') {
            return a;
        }

        //规避html的收集、参数等
        var result, i, len;
        if ('length' in a) {
            for (result = [], i = 0, len = a.length; i < len; i++) {
                result[i] = a[i];
            }
            return result;
        }
        //返回一个纯粹的数组
        return [a]
    }
    //定义add() remove()函数
    //处理兼容
    if(document.addEventListener){
        add=function (node,ev,cb) {
            node.addEventListener(ev, cb, false);
        };
        remove=function (node,ev,cb) {
            node.removeEventListener(ev,cb,false);
        };
    }else if(document.attachEvent){
        add=function (node,ev,cb) {
            node.attachEvent(ev, cb, false);
        };
        remove=function (node,ev,cb) {
            node.detachEvent(ev,cb,false);
        };
    }else{
        add=function (node,ev,cb) {
            node['on'+ev]=cb;
        };
        remove=function (node,ev) {
            node['on'+ev]=null;
        }
    }
    //公共接口
    return {
        addListener:function (element,event_name,callback) {
            element=toArray(element);
            for(var i=0;i<element.length;i++){
                add(element[i],event_name,callback);
            }
        },
        removeListener:function (element,event_name,callback) {
            var i, els = toArray(element), len = els.length();
            for(i=0;i<len;i++){
                remove(els[i], event_name, callback);
            }
        },
        getEvent:function (event) {
            return event || window.event;
        },
        getTarget:function (event) {
            var e = this.getEvent(event);
            return e.target||e.srcElement;
        },
        stopPropagation:function (event) {
            var e=this.getEvent(event);
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble = true;
            }
        },
        preventDefault:function (event) {
            var e = this.getEvent(event);
            if(e.preventDefault){
                e.preventDefault();
            }else{
                e.returnValue = false;
            }
        }
    }
}());
function loginCallback(e) {
    console.log('loginCallback');
    e = myevent.getEvent(e);
    myevent.stopPropagation(e);
    myevent.preventDefault(e);
    document.querySelector('.mask').style.display = 'block';
    document.querySelector('.show').style.display = 'block';
    //不显示滚动条
    document.body.style.overflow='hidden';
}
function maskCallback(e) {
    console.log('maskCallback');
    e = myevent.getEvent(e);
    myevent.stopPropagation(e);
    myevent.preventDefault(e);
    var isHasax=myevent.getTarget(e).classList.contains('ax');
    console.log(isHasax);
    if(!isHasax)
    {
        document.querySelector('.mask').style.display = 'none';
        document.querySelector('.show').style.display = 'none';
        document.body.style.overflow = 'visible';
    }
}

var login = document.getElementById('login');
myevent.addListener(login,'click',loginCallback);
myevent.addListener(document,'click',maskCallback);

