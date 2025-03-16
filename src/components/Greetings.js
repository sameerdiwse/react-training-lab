function GreetFromMe(thisprop)
{
    return(
        <div>
            {thisprop.thisisname && <p>User has logged in!</p>}
            {!thisprop.thisisname && <p>User hasn't logged in yet</p>}
        </div>
    );
}

export default GreetFromMe;