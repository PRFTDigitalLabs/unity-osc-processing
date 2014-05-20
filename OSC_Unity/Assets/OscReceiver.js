// Make sure you have UDPPacketIO.cs and Osc.cs in the standard assets folder

var RemoteIP : String = "127.0.0.1";
var SendToPort : int = 57131;
var ListenerPort : int = 57130;

var controller : Transform; 
var handler : Osc;

// Messages are accessible from this instance in other scripts
static var messages : Array = [0];

public function Start ()
{	
	// Set up OSC connection
	var udp : UDPPacketIO = GetComponent("UDPPacketIO");
	udp.init(RemoteIP, SendToPort, ListenerPort);
	handler = GetComponent("Osc");
	handler.init(udp);
	
	// Listen to the channels set in the Processing sketch
	handler.SetAddressHandler("/sensorX", ListenEvent);
	handler.SetAddressHandler("/sensorY", ListenEvent);
}

public function ListenEvent(oscMessage : OscMessage) : void
{	
	switch(oscMessage.Address){
		case "/sensorX":	i = 0; break;
		case "/sensorY":	i = 1; break;
	}
	
	// Make the data available 
	messages[i] = oscMessage.Values[0];
} 

