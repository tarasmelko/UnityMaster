﻿#pragma strict

public var turnSmoothing : float = 7f;     // A smoothing value for turning the player.
public var speedDampTime : float = 15f;    // The damping for the speed parameter
public var moveTouchPad : Joystick;
public var rotateTouchPad : Joystick;

//private var anim : Animator;                // Reference to the animator component.            // Reference to the HashIDs.


function Awake ()
{
    // Setting up the references.
  //  anim = GetComponent(Animator);
  //  anim.SetLayerWeight(0, 1f);
}


function FixedUpdate ()
{
   // Cache the inputs. 
    MovementManagement(rotateTouchPad, moveTouchPad.position.y);
}


function MovementManagement (rotate : Joystick, horizontal : float)
{    
    // If there is some axis input...
    if(rotate.position.x != 0f || rotate.position.y != 0f)
    {
        // ... set the players rotation and set the speed parameter to 5.5f.
        Rotating(rotate.position.x, rotate.position.y);
    }
    if(horizontal != 0f){
    if(rotate.position.x == 0 || rotate.position.y == 0){
    
       }else{
       // anim.SetFloat(Animator.StringToHash("Speed"), 5.5f, speedDampTime, Time.deltaTime);
        rigidbody.MovePosition(new Vector3( (this.gameObject.transform.position.x + rotate.position.x/5), 0f,(this.gameObject.transform.position.z + rotate.position.y/5)));
        }
    }
   // else
        //anim.SetFloat(Animator.StringToHash("Speed"), 0);
}


function Rotating (horizontal : float, vertical : float)
{
    // Create a new vector of the horizontal and vertical inputs.
    var targetDirection : Vector3 = new Vector3(horizontal, 0f, vertical);
    
    // Create a rotation based on this new vector assuming that up is the global y axis.
    var targetRotation : Quaternion = Quaternion.LookRotation(targetDirection, Vector3.up);
    
    // Create a rotation that is an increment closer to the target rotation from the player's rotation.
    var newRotation : Quaternion = Quaternion.Lerp(rigidbody.rotation, targetRotation, turnSmoothing * Time.deltaTime);
    
    // Change the players rotation to this new rotation.
    rigidbody.MoveRotation(newRotation);
}