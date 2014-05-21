
function Update () {
		var time : float = Time.deltaTime * 20;
//	transform.Rotate(Vector3.right * Time.deltaTime * 10);
	transform.Rotate(0, time, 0, Space.World);
}