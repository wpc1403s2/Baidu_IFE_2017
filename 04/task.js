//创建网格
(function createTable(){
  var table=document.getElementById('table');
  var arr_tr=[];
  var arr_td=[];
  for (var i = 0; i < 11; i++) {
      arr_tr[i] = document.createElement('tr');
      table.appendChild(arr_tr[i]);
      for(var j=0;j<11;j++){
          arr_td[j] = document.createElement('td');
          arr_tr[i].appendChild(arr_td[j]);
      }
  }
})();
//节点操作
var moveBox = document.getElementById('move_box');
var go_btn = document.getElementById('go');
var left_btn = document.getElementById('turn_left');
var right_btn = document.getElementById('turn_right');
var back_btn = document.getElementById('turn_back');
var deg=0; //初始化角度
var direction=0; //初始化方向 0：上，1右，2左，3下
var xPos=475;
var yPos=-320;

//创建对象
var objBox={
  xPos:function () {
      xPos += "px";
      return moveBox.style.left
  },
  yPos:function () {
      yPos += 'px';
      return moveBox.style.top;
  },
  direction:function () {
      direction = direction % 4;
      return direction;
  },
  go:function () {
      var command_input = document.getElementById('command_input');
      switch (command_input.value){
          case "":
            switch (direction){
                case 0:
                  if(yPos>=-550){
                    yPos-=50;
                      moveBox.style.top = yPos + 'px';
                  }
                  break;
                case 1:
                  if(xPos>=275){
                      xPos -= 50;
                      moveBox.style.left = xPos + 'px';
                  }
                  break;
                case 2:
                  if(yPos<=-120){
                      yPos+=50;
                      moveBox.style.top = yPos + 'px';
                  }

                  break;
                default:
                  if(xPos<=675){
                      xPos += 50;
                      moveBox.style.left = xPos + 'px';
                  }
                  break;
              }
            break;
          case "TRA LEF":
            objBox.turnLeft();
            break;
          case "TRA RIG":
            objBox.turnRight();
            break;
          case "BACK":
            objBox.turnBack();
            break;
          default:
              alert("在输入框中允许输入如下指令,TRA LEF：向左转,TRA RIG：向右转,BACK：向后转,不填任何指令则默认向头顶朝的方向前进一格");
      }
  },
  turnLeft:function () {
      direction = direction % 4;
      deg+=90;
      moveBox.style.transform = "rotate("+deg+"deg)";
      direction+=3;
      objBox.direction();
  },
  turnRight:function () {
      direction = direction % 4;
      deg-=90;
      moveBox.style.transform = "rotate("+deg+"deg)";
      direction++;
      objBox.direction();
  },
  turnBack:function () {
      direction = direction % 4;
      deg+=180;
      moveBox.style.transform = "rotate("+deg+"deg)";
      direction+=2;
      objBox.direction();
  }
};
go_btn.addEventListener('click', objBox.go, false);
left_btn.addEventListener('click', objBox.turnLeft, false);
right_btn.addEventListener('click', objBox.turnRight, false);
back_btn.addEventListener('click', objBox.turnBack, false);



