
import oscP5.*;
import netP5.*;
import com.leapmotion.leap.Hand;
import com.onformative.leap.LeapMotionP5;
import com.leapmotion.leap.Controller.PolicyFlag;

OscP5 oscP5;
NetAddress myRemoteLocation;
LeapMotionP5 leap;

public void setup() {
  size(500, 500);
  frameRate(60);
  oscP5 = new OscP5(this, 57131);
  myRemoteLocation = new NetAddress("127.0.0.1", 57130);
  leap = new LeapMotionP5(this);
  
  // keep leap running in the background
  leap.getController().setPolicyFlags( PolicyFlag.POLICY_BACKGROUND_FRAMES );
  smooth();
}

public void draw() {
  background(0);

  Hand hand = leap.getHand(0); // Only pull the first hand over controller
  float pitch =  leap.getPitch(hand);
  float yaw = leap.getYaw(hand);
  float roll = leap.getRoll(hand);
  
  println(pitch, yaw, roll);
  println("-----------------------");

  sendValue(pitch, yaw, roll);

}  

void sendValue(float pitch, float yaw, float roll) {
  OscMessage oscMess1 = new OscMessage("/sensorPitch");
  oscMess1.add(pitch);
  oscP5.send(oscMess1, myRemoteLocation); 

  OscMessage oscMess2 = new OscMessage("/sensorYaw");
  oscMess2.add(yaw);
  oscP5.send(oscMess2, myRemoteLocation);
  
  OscMessage oscMess3 = new OscMessage("/sensorRoll");
  oscMess3.add(roll);
  oscP5.send(oscMess3, myRemoteLocation);
}
