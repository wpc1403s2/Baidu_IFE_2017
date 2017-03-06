//前台调用
var $ = function (args) {
    return new Base(args);
};

function Base(args) {
    //创建一个数组，来保存获取的节点和节点数组
    this.elements = [];

    if (typeof args == 'string') {
        //css模拟
        if (args.indexOf(' ') != -1) {
            var elements = args.split(' ');     //把节点拆开分别保存到数组里
            var childElements = [];         //存放临时节点对象的数组，解决被覆盖的问题
            var node = [];                //用来存放父节点用的
            for (var i = 0; i < elements.length; i ++) {
                if (node.length == 0) node.push(document);    //如果默认没有父节点，就把document放入
                switch (elements[i].charAt(0)) {
                    case '#' :
                        childElements = [];       //清理掉临时节点，以便父节点失效，子节点有效
                        childElements.push(this.getId(elements[i].substring(1)));
                        node = childElements;   //保存父节点，因为childElements要清理，所以需要创建node数组
                        break;
                    case '.' :
                        childElements = [];
                        for (var j = 0; j < node.length; j ++) {
                            var temps = this.getClass(elements[i].substring(1), node[j]);
                            for (var k = 0; k < temps.length; k ++) {
                                childElements.push(temps[k]);
                            }
                        }
                        node = childElements;
                        break;
                    default :
                        childElements = [];
                        for (var j = 0; j < node.length; j ++) {
                            var temps = this.getTagName(elements[i], node[j]);
                            for (var k = 0; k < temps.length; k ++) {
                                childElements.push(temps[k]);
                            }
                        }
                        node = childElements;
                }
            }
            this.elements = childElements;
        } else {
            //find模拟
            switch (args.charAt(0)) {
                case '#' :
                    this.elements.push(this.getId(args.substring(1)));
                    break;
                case '.' :
                    this.elements = this.getClass(args.substring(1));
                    break;
                default :
                    this.elements = this.getTagName(args);
            }
        }
    } else if (typeof args == 'object') {
        if (args != undefined) {    //_this是一个对象，undefined也是一个对象，区别与typeof返回的带单引号的'undefined'
            this.elements[0] = args;
        }
    } else if (typeof args == 'function') {
        this.ready(args);
    }
}
//addDomLoaded
Base.prototype.ready = function (fn) {
    addDomLoaded(fn);
};
//获取ID节点
Base.prototype.getId = function (id) {
    return document.getElementById(id)
};

//获取元素节点数组
Base.prototype.getTagName = function (tag, parentNode) {
    var node = null;
    var temps = [];
    if (parentNode != undefined) {
        node = parentNode;
    } else {
        node = document;
    }
    var tags = node.getElementsByTagName(tag);
    for (var i = 0; i < tags.length; i ++) {
        temps.push(tags[i]);
    }
    return temps;
};
Base.prototype.getAttr=function () {
    this.elements.getAttribute('color')
}
//获取CLASS节点数组
Base.prototype.getClass = function (className, parentNode) {
    var node = null;
    var temps = [];
    if (parentNode != undefined) {
        node = parentNode;
    } else {
        node = document;
    }
    var all = node.getElementsByTagName('*');
    for (var i = 0; i < all.length; i ++) {
        if ((new RegExp('(\\s|^)' +className +'(\\s|$)')).test(all[i].className)) {
            temps.push(all[i]);
        }
    }
    return temps;
}
//获取某组节点的数量
Base.prototype.length = function () {
    return this.elements.length;
};
//设置CSS
Base.prototype.css = function (attr, value) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (arguments.length == 1) {
            return getStyle(this.elements[i], attr);
        }
        this.elements[i].style[attr] = value;
    }
    return this;
}
Base.prototype.myColor=function (attr) {
    return getStyle(this.elements, attr);
}

//设置表单字段元素
Base.prototype.form = function (name) {
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i] = this.elements[i][name];
    }
    return this;
};

//设置表单字段内容获取
Base.prototype.value = function (str) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (arguments.length == 0) {
            return this.elements[i].value;
        }
        this.elements[i].value = str;
    }
    return this;
}
//设置innerText
Base.prototype.text = function (str) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (arguments.length == 0) {
            return getInnerText(this.elements[i]);
        }
        setInnerText(this.elements[i], text);
    }
    return this;
}

//设置事件发生器
Base.prototype.bind = function (event, fn) {
    for (var i = 0; i < this.elements.length; i ++) {
        addEvent(this.elements[i], event, fn);
    }
    return this;
};
//设置CSS
Base.prototype.css = function (attr, value) {
    for (var i = 0; i < this.elements.length; i ++) {
        if (arguments.length == 1) {
            return getStyle(this.elements[i], attr);
        }
        this.elements[i].style[attr] = value;
    }
    return this;
}
