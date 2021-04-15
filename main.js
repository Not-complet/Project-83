var mouseEvent;
var previous_mouse_coords_x, previous_mouse_coords_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var line_width = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("colorInput").value;
    line_width = document.getElementById("lineWidth").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_mouse_position_x = e.clientX - canvas.offsetLeft;
    var current_mouse_position_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(previous_mouse_coords_x, previous_mouse_coords_y);
        ctx.lineTo(current_mouse_position_x,current_mouse_position_y);
        console.log(previous_mouse_coords_x + previous_mouse_coords_y);
        console.log(current_mouse_position_x, current_mouse_position_y);
        ctx.stroke();
    } 
    previous_mouse_coords_y = current_mouse_position_y;
    previous_mouse_coords_x = current_mouse_position_x;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    current_mouse_position_y = e.touches[0].clientY - canvas.offsetTop;
    current_mouse_position_x = e.touches[0].clientX - canvas.offsetLeft;
    color = document.getElementById("colorInput").value;
    line_width = document.getElementById("lineWidth").value;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_mouse_position_y = e.touches[0].clientY - canvas.offsetTop;
    current_mouse_position_x = e.touches[0].clientX - canvas.offsetLeft;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(previous_mouse_coords_x, previous_mouse_coords_y);
    ctx.lineTo(current_mouse_position_x,current_mouse_position_y);
    console.log(previous_mouse_coords_x + previous_mouse_coords_y);
    console.log(current_mouse_position_x, current_mouse_position_y);
    ctx.stroke();

    previous_mouse_coords_y = current_mouse_position_y;
    previous_mouse_coords_x = current_mouse_position_x;
}