function introComponent (){
    return(
        <div className="row">
            <div className="col">
                <p className="big-text">Learn to code by watching others</p>
                <p className="small-text">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                but understanding how developers think is invaluable.</p>
            </div>
            <div className="col">
            <div className="card mb-3 rounded-4">
                <div id="cardBody" className="card-body rounded-4">
                    <p className="card-title"><span id="span1">Try it free 7 days</span><span id="span2"> then $20/mo. thereafter</span></p>
                </div>
            </div>
            <div className="card rounded-4" style={{width:"400px"}}>
                <div className="card-body rounded-4" style={{margin:"3%"}}>
                <form className="form-floating">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="firstName" placeholder="Jonathan"/>
                    <label className="lbl" for="firstName">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="lastName" placeholder="Jonathna"/>
                    <label className="lbl" for="lastName">Last Name</label>
                </div>    
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                    <label className="lbl" for="emial">Email Address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                    <label className="lbl" for="password">Password     </label>  
                </div>
                <div className="form-floating mb-3 text-center">
                    <button type="submit"  className="btn">Claim your free Trial</button>
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