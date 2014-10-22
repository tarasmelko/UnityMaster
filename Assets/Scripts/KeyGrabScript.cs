using UnityEngine;
using System.Collections;

public class KeyGrabScript : MonoBehaviour {

	public GameObject player;                      // Reference to the player.
     		
	void OnTriggerEnter (Collider other)
	{
		if(other.gameObject == player)
		{
			Destroy(gameObject);
		}
	}

}
