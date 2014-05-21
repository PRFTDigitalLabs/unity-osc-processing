// Channels are set in script GUI
var xChannel : float;
var yChannel : float;

function Update () {
	// Get data from reciever	
	var x = OscReceiver.messages[xChannel];
	var y = OscReceiver.messages[yChannel];

	// Transform scale of object
	transform.localScale = Vector3(x,y,1);
}
