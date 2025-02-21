// @ts-ignore
let userDetails=JSON.parse(localStorage.getItem("userdata"))  || [];
console.log(userDetails);

function Signup ()
{
    // @ts-ignore
    let mobileno = document.getElementById( "phone" ).value;
    // @ts-ignore
    let password = document.getElementById("pass").value;

    if(mobileno.length == 10)
    {
        let userData = {
            mobileno: mobileno,
            password:password
        }
       let users=[...userDetails,userData]
       localStorage.setItem('userdata', JSON.stringify(users));

       alert("Register Successfully");
       window.location.href="signin.html";
    }
    else
    {
        alert('Please enter 10 digit mobile number')
    }

}

function signin()
{
    window.location.href="signin.html";
}