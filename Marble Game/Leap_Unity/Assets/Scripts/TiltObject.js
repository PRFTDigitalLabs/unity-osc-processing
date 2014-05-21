

function Update () {
	var pitch : float = OscReceiver.messages[0];
	var yaw : float = OscReceiver.messages[1];
	var roll : float = OscReceiver.messages[2];

//	Debug.Log(pitch + ' : ' + yaw + ' : ' + roll);

	var smooth = 2.0;
	var tiltAroundZ = roll;
	var tiltAroundX = -pitch;
	var target = Quaternion.Euler (tiltAroundX, 0, tiltAroundZ);
	// Dampen towards the target rotation
	transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * smooth);
}
