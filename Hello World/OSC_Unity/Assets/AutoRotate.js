
function Update () {
		var time : float = Time.deltaTime * 10;
//	transform.Rotate(Vector3.right * Time.deltaTime * 10);
	transform.Rotate(time, time, time, Space.World);
}