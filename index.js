function introComponent (){ 
    function validateEmail() 
        {
            let email=document.getElementById("email");
            if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
            {
                return (email.classList.remove("is-invalid"));
                
            }
                return (email.classList.add("is-invalid")); 
        }
    function validateInput(){
        let inputs=document.querySelectorAll(".form-control");
        inputs.forEach(input => {
            if(input.value=="" || input.value==null){
                input.classList.add("is-invalid");
            }
            else{
                input.classList.remove("is-invalid");       
            }  
        });
      
    }  
function check(event){
        event.preventDefault(); 
        validateEmail()
        validateInput()
   
}
    return(
        <div className="row">
            <div className="col">
                <p className="big-text">Learn to code by watching others</p>
                <p className="small-text">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                but understanding how developers think is invaluable.</p>
            </div>
            <div className="col">
            <div className="card mb-3 rounded-4" style={{width:"400px"}}>
                <div id="cardBody" className="card-body rounded-4">
                    <p className="card-title"><span id="span1">Try it free 7 days</span><span id="span2"> then $20/mo. thereafter</span></p>
                </div>
            </div>
            <div className="card rounded-4" style={{width:"400px"}}>
                <div className="card-body rounded-4" style={{margin:"3%"}}>
                <form  className="form-floating" onSubmit={check} novalidate>
                <div className="form-floating mb-3 input-container">
                    <input type="text" className="form-control" id="firstName" placeholder="Jonathan"/>
                    <div id="firstName" className="invalid-feedback">
                        Email invalid
                    </div>
                    <label className="lbl" for="firstName">First Name</label>
                </div>
                <div className="form-floating mb-3 input-container">
                    <input type="text" className="form-control" id="lastName" placeholder="Jonathna" />
                    <div id="lastName" className="invalid-feedback">
                        Please choose a username.
                    </div>
                    <label className="lbl" for="lastName">Last Name</label>
                </div>    
                <div className="form-floating mb-3 input-container">
                    <input type="text" className="form-control" id="email" placeholder="name@example.com"/>
                    <div id="email" className="invalid-feedback">
                        Email invalid
                    </div>
                    <label className="lbl" for="emial">Email Address</label>
                </div>
                <div className="form-floating mb-3 input-container">
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                    <div id="password" className="invalid-feedback">
                        Password invalid
                    </div>
                    <label className="lbl" for="password">Password     </label>  
                </div>
                <div className="form-floating mb-3 text-center">
                    <button type="submit" className="btn">Claim your free Trial</button>
                </div>
                </form>
                <p><span id="span3">By clicking the button you are agreeing to our</span><span id="span4"> Terms and services</span></p>
                </div>
            </div>
            </div>
        </div>  
    )
}
 

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(introComponent())
