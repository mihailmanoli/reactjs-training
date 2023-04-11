import "./components.css";

export default function SignUp(props) {
    return (
        <form>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>   
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Email Address</label>
                    <input type="email" name="user-email" value={props.email} onChange={props.handleChange('email')} className="styled-input"/>
                    {props.emailError && <span style={{color: "red"}}>Email is not valid!</span>}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Password</label>
                    <input type="password" name="user-password" value={props.password} onChange={props.handleChange('password')} className="styled-input"/>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Confirm Password</label>
                    <input type="password" name="user-confirm-password" value={props.confirmPassword} onChange={props.handleChange('confirmPassword')} className="styled-input"/>
                </div>
            </div>
        </form>
    );
}