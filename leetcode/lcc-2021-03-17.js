class Solution {

  constructor (radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
  }

  randPoint() {
    //create a random length within the radius
    var length = Math.sqrt(Math.random())*this.radius;

    //create a random angle
    var degree = Math.random()*2*Math.PI;


    var x = this.x_center+length*Math.cos(degree);
    var y = this.y_center+length*Math.sin(degree);
    return [x,y]

  }
}
