using UnityEngine;
using System.Collections;

public class BuildRotate : MonoBehaviour {

	public GameObject player;                      // Reference to the player.

	private bool rotate = false;

	void OnTriggerEnter (Collider other)
	{
		if(other.gameObject == player)
		{
			this.gameObject.transform.Rotate (0, 0, 1);
		}
	}
	
}
