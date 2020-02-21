/* Canvas alphabet proof of concept - H E L L O   W O R L D.
  multiple scaling factors.  need unified.
*/

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// use size of window to define canvas
function resize() {
  canvas.width = window.innerWidth-100;
  canvas.height = window.innerHeight-100;
};

window.addEventListener('resize', resize);

// start drawing when page loads
window.addEventListener('load', draw);

// redraw whole thing on an interval
setInterval(draw,6000);

// draw 10 letters, by strictly defined long and short horizontal, vertical and diagonal lines
// int,pos,cnt = vertical (long)
// hor,shrt,tal = horizontal (short)
// diag,zig,inc = diagonal
// 'x' is a special length
function draw() {
  resize();
  ctx.clearRect(0,0,canvas.width,canvas.height)

  let cursor=10;
  let len=10;
  let wid=10;

// H E L L O

  let int1=setInterval(bigVertLine1,30)
  let pos1={x:10,y:10},cnt1=1;
  function bigVertLine1(){
    ctx.fillRect(pos1.x-cursor/2,pos1.y-cursor/2,cursor,cursor);
    pos1.y+=1;
    cnt1++;
      if (cnt1==cursor*len){
        clearInterval(int1);
      }
  }

  let int2=setInterval(bigVertLine2,30)
  let pos2={x:60,y:10},cnt2=1;
  function bigVertLine2(){
    ctx.fillRect(pos2.x-cursor/2,pos2.y-cursor/2,cursor,cursor);
    pos2.y+=1;
    cnt2++;
      if (cnt2==cursor*len){
        clearInterval(int2);
      }
  }

  let int3=setInterval(bigVertLine3,30)
  let pos3={x:85,y:10},cnt3=1;
  function bigVertLine3(){
    ctx.fillRect(pos3.x-cursor/2,pos3.y-cursor/2,cursor,cursor);
    pos3.y+=1;
    cnt3++;
      if (cnt3==cursor*len){
        clearInterval(int3);
      }
  }

  let int4=setInterval(bigVertLine4,30)
  let pos4={x:160,y:10},cnt4=1;
  function bigVertLine4(){
    ctx.fillRect(pos4.x-cursor/2,pos4.y-cursor/2,cursor,cursor);
    pos4.y+=1;
    cnt4++;
      if (cnt4==cursor*len){
        clearInterval(int4);
      }
  }

  let int5=setInterval(bigVertLine5,30)
  let pos5={x:230,y:10},cnt5=1;
  function bigVertLine5(){
    ctx.fillRect(pos5.x-cursor/2,pos5.y-cursor/2,cursor,cursor);
    pos5.y+=1;
    cnt5++;
      if (cnt5==cursor*len){
        clearInterval(int5);
      }
  }

  let int6=setInterval(bigVertLine6,30)
  let pos6={x:300,y:10},cnt6=1;
  function bigVertLine6(){
    ctx.fillRect(pos6.x-cursor/2,pos6.y-cursor/2,cursor,cursor);
    pos6.y+=1;
    cnt6++;
      if (cnt6==cursor*len){
        clearInterval(int6);
      }
  }

  let int7=setInterval(bigVertLine7,30)
  let pos7={x:350,y:10},cnt7=1;
  function bigVertLine7(){
    ctx.fillRect(pos7.x-cursor/2,pos7.y-cursor/2,cursor,cursor);
    pos7.y+=1;
    cnt7++;
      if (cnt7==cursor*len){
        clearInterval(int7);
      }
  }


  let hor1=setInterval(shortHorLine1,30)
  let shrt1={x:10,y:55},tal1=1;
  function shortHorLine1(){
    ctx.fillRect(shrt1.x-cursor/2,shrt1.y-cursor/2,cursor,cursor);
    shrt1.x+=.5;
    tal1++;
    if (tal1==cursor*wid){
      clearInterval(hor1);
    }
  }

  let hor2=setInterval(shortHorLine2,30)
  let shrt2={x:85,y:10},tal2=1;
  function shortHorLine2(){
    ctx.fillRect(shrt2.x-cursor/2,shrt2.y-cursor/2,cursor,cursor);
    shrt2.x+=.5;
    tal2++;
    if (tal2==cursor*wid){
      clearInterval(hor2);
    }
  }

  let hor3=setInterval(shortHorLine3,30)
  let shrt3={x:85,y:55},tal3=1;
  function shortHorLine3(){
    ctx.fillRect(shrt3.x-cursor/2,shrt3.y-cursor/2,cursor,cursor);
    shrt3.x+=.5;
    tal3++;
    if (tal3==cursor*wid){
      clearInterval(hor3);
    }
  }

  let hor4=setInterval(shortHorLine4,30)
  let shrt4={x:85,y:110},tal4=1;
  function shortHorLine4(){
    ctx.fillRect(shrt4.x-cursor/2,shrt4.y-cursor/2,cursor,cursor);
    shrt4.x+=.5;
    tal4++;
    if (tal4==cursor*wid){
      clearInterval(hor4);
    }
  }

  let hor5=setInterval(shortHorLine5,30)
  let shrt5={x:160,y:110},tal5=1;
  function shortHorLine5(){
    ctx.fillRect(shrt5.x-cursor/2,shrt5.y-cursor/2,cursor,cursor);
    shrt5.x+=.5;
    tal5++;
    if (tal5==cursor*wid){
      clearInterval(hor5);
    }
  }

  let hor6=setInterval(shortHorLine6,30)
  let shrt6={x:230,y:110},tal6=1;
  function shortHorLine6(){
    ctx.fillRect(shrt6.x-cursor/2,shrt6.y-cursor/2,cursor,cursor);
    shrt6.x+=.5;
    tal6++;
    if (tal6==cursor*wid){
      clearInterval(hor6);
    }
  }

  let hor7=setInterval(shortHorLine7,30)
  let shrt7={x:300,y:10},tal7=1;
  function shortHorLine7(){
    ctx.fillRect(shrt7.x-cursor/2,shrt7.y-cursor/2,cursor,cursor);
    shrt7.x+=.5;
    tal7++;
    if (tal7==cursor*wid){
      clearInterval(hor7);
    }
  }

  let hor8=setInterval(shortHorLine8,30)
  let shrt8={x:300,y:110},tal8=1;
  function shortHorLine8(){
    ctx.fillRect(shrt8.x-cursor/2,shrt8.y-cursor/2,cursor,cursor);
    shrt8.x+=.5;
    tal8++;
    if (tal8==cursor*wid){
      clearInterval(hor8);
    }
  }

// W O R L D

  let int8=setInterval(bigVertLine8,30)
  let pos8={x:10,y:150},cnt8=1;
  function bigVertLine8(){
    ctx.fillRect(pos8.x-cursor/2,pos8.y-cursor/2,cursor,cursor);
    pos8.y+=1;
    cnt8++;
      if (cnt8==cursor*len){
        clearInterval(int8);
      }
  }

  let int9=setInterval(bigVertLine9,30)
  let pos9={x:60,y:150},cnt9=1;
  function bigVertLine9(){
    ctx.fillRect(pos9.x-cursor/2,pos9.y-cursor/2,cursor,cursor);
    pos9.y+=1;
    cnt9++;
      if (cnt9==cursor*len){
        clearInterval(int9);
      }
  }

  let int10=setInterval(bigVertLine10,30)
  let pos10={x:110,y:150},cnt10=1;
  function bigVertLine10(){
    ctx.fillRect(pos10.x-cursor/2,pos10.y-cursor/2,cursor,cursor);
    pos10.y+=1;
    cnt10++;
      if (cnt10==cursor*len){
        clearInterval(int10);
      }
  }

  let int11=setInterval(bigVertLine11,30)
  let pos11={x:130,y:150},cnt11=1;
  function bigVertLine11(){
    ctx.fillRect(pos11.x-cursor/2,pos11.y-cursor/2,cursor,cursor);
    pos11.y+=1;
    cnt11++;
      if (cnt11==cursor*len){
        clearInterval(int11);
      }
  }

  let int12=setInterval(bigVertLine12,30)
  let pos12={x:180,y:150},cnt12=1;
  function bigVertLine12(){
    ctx.fillRect(pos12.x-cursor/2,pos12.y-cursor/2,cursor,cursor);
    pos12.y+=1;
    cnt12++;
      if (cnt12==cursor*len){
        clearInterval(int12);
      }
  }

  let int13=setInterval(bigVertLine13,30)
  let pos13={x:200,y:150},cnt13=1;
  function bigVertLine13(){
    ctx.fillRect(pos13.x-cursor/2,pos13.y-cursor/2,cursor,cursor);
    pos13.y+=1;
    cnt13++;
      if (cnt13==cursor*len){
        clearInterval(int13);
      }
  }

  let int14=setInterval(bigVertLine14,30)
  let pos14={x:270,y:150},cnt14=1;
  function bigVertLine14(){
    ctx.fillRect(pos14.x-cursor/2,pos14.y-cursor/2,cursor,cursor);
    pos14.y+=1;
    cnt14++;
      if (cnt14==cursor*len){
        clearInterval(int14);
      }
  }

  let int15=setInterval(bigVertLine15,30)
  let pos15={x:340,y:150},cnt15=1;
  function bigVertLine15(){
    ctx.fillRect(pos15.x-cursor/2,pos15.y-cursor/2,cursor,cursor);
    pos15.y+=1;
    cnt15++;
      if (cnt15==cursor*len){
        clearInterval(int15);
      }
  }

  let hor9=setInterval(shortHorLine9,30)
  let shrt9={x:10,y:250},tal9=1;
  function shortHorLine9(){
    ctx.fillRect(shrt9.x-cursor/2,shrt9.y-cursor/2,cursor,cursor);
    shrt9.x+=.5;
    tal9++;
    if (tal9==cursor*wid){
      clearInterval(hor9);
    }
  }

  let hor10=setInterval(shortHorLine10,30)
  let shrt10={x:60,y:250},tal10=1;
  function shortHorLine10(){
    ctx.fillRect(shrt10.x-cursor/2,shrt10.y-cursor/2,cursor,cursor);
    shrt10.x+=.5;
    tal10++;
    if (tal10==cursor*wid){
      clearInterval(hor10);
    }
  }

  let hor11=setInterval(shortHorLine11,30)
  let shrt11={x:130,y:150},tal11=1;
  function shortHorLine11(){
    ctx.fillRect(shrt11.x-cursor/2,shrt11.y-cursor/2,cursor,cursor);
    shrt11.x+=.5;
    tal11++;
    if (tal11==cursor*wid){
      clearInterval(hor11);
    }
  }

  let hor12=setInterval(shortHorLine12,30)
  let shrt12={x:130,y:250},tal12=1;
  function shortHorLine12(){
    ctx.fillRect(shrt12.x-cursor/2,shrt12.y-cursor/2,cursor,cursor);
    shrt12.x+=.5;
    tal12++;
    if (tal12==cursor*wid){
      clearInterval(hor12);
    }
  }

  let hor13=setInterval(shortHorLine13,30)
  let shrt13={x:200,y:150},tal13=1;
  function shortHorLine13(){
    ctx.fillRect(shrt13.x-cursor/2,shrt13.y-cursor/2,cursor,cursor);
    shrt13.x+=.5;
    tal13++;
    if (tal13==cursor*wid){
      clearInterval(hor13);
    }
  }

  let hor14=setInterval(shortHorLine14,30)
  let shrt14={x:200,y:200},tal14=1;
  function shortHorLine14(){
    ctx.fillRect(shrt14.x-cursor/2,shrt14.y-cursor/2,cursor,cursor);
    shrt14.x+=.5;
    tal14++;
    if (tal14==cursor*wid){
      clearInterval(hor14);
    }
  }

  let hor15=setInterval(shortHorLine15,30)
  let shrt15={x:270,y:250},tal15=1;
  function shortHorLine15(){
    ctx.fillRect(shrt15.x-cursor/2,shrt15.y-cursor/2,cursor,cursor);
    shrt15.x+=.5;
    tal15++;
    if (tal15==cursor*wid){
      clearInterval(hor15);
    }
  }

  //R-short vert
  let int16x=setInterval(bigVertLine16x,30)
  let pos16x={x:250,y:150},cnt16x=1;
  function bigVertLine16x(){
    ctx.fillRect(pos16x.x-cursor/2,pos16x.y-cursor/2,cursor,cursor);
    pos16x.y+=.5;
    cnt16x++;
      if (cnt16x==cursor*len){
        clearInterval(int16x);
      }
  }

  let int17x=setInterval(bigVertLine17x,30)
  let pos17x={x:390,y:160},cnt17x=1;
  function bigVertLine17x(){
    ctx.fillRect(pos17x.x-cursor/2,pos17x.y-cursor/2,cursor,cursor);
    pos17x.y+=.8;
    cnt17x++;
      if (cnt17x==cursor*len){
        clearInterval(int17x);
      }
  }

  let hor16y=setInterval(shortHorLine16y,30)
  let shrt16y={x:340,y:150},tal16y=1;
  function shortHorLine16y(){
    ctx.fillRect(shrt16y.x-cursor/2,shrt16y.y-cursor/2,cursor,cursor);
    shrt16y.x+=.4;
    tal16y++;
    if (tal16y==cursor*wid){
      clearInterval(hor16y);
    }
  }

  let hor17y=setInterval(shortHorLine17y,30)
  let shrt17y={x:340,y:250},tal17y=1;
  function shortHorLine17y(){
    ctx.fillRect(shrt17y.x-cursor/2,shrt17y.y-cursor/2,cursor,cursor);
    shrt17y.x+=.4;
    tal17y++;
    if (tal17y==cursor*wid){
      clearInterval(hor17y);
    }
  }

  let diag1=setInterval(shortDiagLine1,30)
  let zig1={x:200,y:200},inc1=1;
  function shortDiagLine1(){
    ctx.fillRect(zig1.x-cursor/2,zig1.y-cursor/2,cursor,cursor);
    zig1.x+=.5;
    zig1.y+=.5;
    inc1++;
    if (inc1==cursor*wid){
      clearInterval(diag1);
    }
  }
}
