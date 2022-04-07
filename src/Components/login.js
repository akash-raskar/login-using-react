import { useState, useRef, useEffect} from "react"

function Login() {
    //const useRef = useRef();
    //const errRef = useRef();
    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');

    const submit = () => {
        
        //const [errMsg, setErrMsg] = useState('');
        //const [success, setSuccess] = useState(false);
         console.log(user + ' ' + passwd );

       // useEffect(()=>{
       //     useRef.current.focus();
       // }, [])

       // useEffect(()=>{
         //   setErrMsg('');
       // }, [user, passwd])
    }

    return (
        
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="email" className="form-control"
                            onChange={e => setUser(e.target.value)} id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control"
                            onChange={e => setPasswd(e.target.value)} id="pwd" />
                    </div>

                    <button type="button" onClick={submit} class="btn btn-default mt-4 ">Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login