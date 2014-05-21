//You can set these variables in the scene because they are public 
public var RemoteIP : String = "127.0.0.1";
public var SendToPort : int = 57131;
public var ListenerPort : int = 57130;

public var controller : Transform; 
private var handler : Osc;
static var messages : Array = [0,0,0];

public function Start ()
{
	var udp : UDPPacketIO = GetComponent("UDPPacketIO");
	udp.init(RemoteIP, SendToPort, ListenerPort);
	handler = GetComponent("Osc");
	handler.init(udp);

	handler.SetAddressHandler("/sensorPitch", ListenEvent);
	handler.SetAddressHandler("/sensorYaw", ListenEvent);
	handler.SetAddressHandler("/sensorRoll", ListenEvent);
}

public function ListenEvent(oscMessage : OscMessage) : void
{	
//	Debug.Log(oscMessage.Values[0]);

	switch(oscMessage.Address){
		case "/sensorPitch":	i = 0; break;
		case "/sensorYaw":		i = 1; break;
		case "/sensorRoll":		i = 2; break;
	}

	messages[i] = oscMessage.Values[0];
	
} 

