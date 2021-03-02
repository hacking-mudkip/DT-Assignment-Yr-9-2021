noStroke();
draw = function() {
    background(250, 250, 250);
    fill(235, 38, 54);
    rect(0,0,width,height*0.20);
    image(getImage("images/logo.jfif"), 2, 2, width*0.20, height*0.20);
    fill(255, 255, 255);
    text('Nintendo Collectables Shop', 82, 44);
    image(getImage("images/logo.jfif"), 327, 9, width*0.15, height*0.15);
};
