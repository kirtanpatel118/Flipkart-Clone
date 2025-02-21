// @ts-ignore
let userDetails = JSON.parse( localStorage.getItem( "userdata" ) ) || [];


function Signin ()
{
    // @ts-ignore
    let mobileno = document.getElementById( "phone" ).value;
    // @ts-ignore
    let password = document.getElementById( "pass" ).value;

    if ( mobileno.length == 10 )
    {
        for ( let i = 0; i < userDetails.length; i++ )
        {
            if ( mobileno == userDetails[ i ].mobileno && password == userDetails[ i ].password )
            {
                alert( "Login Successfully" )
                window.location.href = "index.html";
                break
            }
            else if ( mobileno != userDetails[ i ].mobileno && password == userDetails[ i ].password )
            {
                alert( "Invalid Mobile" );
                break;
            }
            else if ( mobileno == userDetails[ i ].mobileno && password != userDetails[ i ].password )
            {
                alert( "Invalid Password" );
                break;
            }
            else (mobileno != userDetails[ i ].mobileno && password != userDetails[ i ].password)
            {
                alert( "User doesn't Exits" )
                window.location.href = "signup.html";
                break;
            }

        }
    }
    else
    {
        alert( "Enter 10 digits Mobileno" )
    }

}

function signup ()
{
    window.location.href = "signup.html";
}