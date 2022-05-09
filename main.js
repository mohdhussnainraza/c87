var las_position_of_x, last_position_of_y;
color ="blank";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
    if(width < 992)
    {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    }

    canvas.addEventlistener("touchstart", my_touchstart);

    function my_touchstart(e)
    {
        console.log("my_touchstart");

      color = document.getElementById("color").value;
      width_of_line = document.getElementById("width_of_line").value;


      last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
      last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    

    function my_touchmove(e)
    {

        console.log("my_touchMove");
        current_position_of_touch_x = e.touches[0].clientY - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle = color