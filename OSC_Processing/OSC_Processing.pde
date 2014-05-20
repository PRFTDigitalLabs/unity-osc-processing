/*
* oscP5 library by Andreas Schlegel
* oscP5 website at http://www.sojamo.de/oscP5
*/
import oscP5.*;
import netP5.*;

OscP5 oscP5;
NetAddress myRemoteLocation;

void setup() {
  size(400, 400);
  frameRate(60);
  
  // Set up our broadcast on a port Unity listens to
  oscP5 = new OscP5(this, 57131);
  myRemoteLocation = new NetAddress("127.0.0.1", 57130);
}


void draw() {
  background(0);  
  // Map the mouse coordinates into numbers Unity will like
  float sensorX = map(mouseX, 0, 400, 1, 5);
  float sensorY = map(mouseY, 0, 400, 1, 5);
  println(sensorX, sensorY);

  sendValue(sensorX, sensorY);
}

void sendValue(float x, float y) {
  // Create a channel for the x coordinate
  OscMessage oscMess1 = new OscMessage("/sensorX");
  oscMess1.add(x);
  
  // Create a channel for the y coordinate
  OscMessage oscMess2 = new OscMessage("/sensorY");
  oscMess2.add(y);
  
  // Send our data over to Unity!
  oscP5.send(oscMess1, myRemoteLocation); 
  oscP5.send(oscMess2, myRemoteLocation);
}

