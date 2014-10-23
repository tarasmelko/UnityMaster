using UnityEngine;
using System.Collections;

public class Touch : MonoBehaviour {

	private int speed = 100;
	public GameObject player;
	public GameObject dialog;
	private Animator anim;

	void Start(){
		anim = dialog.GetComponent <Animator>();
		anim.SetLayerWeight (0, 1f);
	}

	void Update() {
		if (Input.touchCount == 1 && Input.touches.Length > 0) 
		{
			if (Input.touches[0].phase == TouchPhase.Moved)
			{
				//transform.Rotate(0, 50, 0);
			}
		}
		
	}
	
	void OnTriggerEnter (Collider other)
	{
		if(other.gameObject == player)
		{
			anim.SetBool("show", true);
		}
	}

	void OnTriggerExit (Collider other)
	{
		if(other.gameObject == player)
		{
			anim.SetBool("show", false);
		}
	}
}
