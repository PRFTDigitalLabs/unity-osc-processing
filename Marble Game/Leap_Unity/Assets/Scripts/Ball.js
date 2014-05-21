#pragma strict

function Start () {

}

function Update () {
	if(transform.position.y < -200){
		Application.LoadLevel(Application.loadedLevel);
	}
}

function OnCollisionEnter(collision : Collision) {
	if(collision.collider.tag == "Finish"){
		Application.LoadLevel(Application.loadedLevel);
	}
}