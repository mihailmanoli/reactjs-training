export default function SignUp(props) {
    return (
        <form>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>   
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Email Address</label>
                    <input type="email" name="user-email" value={props.email} onChange={props.handleChange('email')} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Password</label>
                    <input type="password" name="user-password" value={props.password} onChange={props.handleChange('password')} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Confirm Password</label>
                    <input type="password" name="user-confirm-password" value={props.confirmPassword} onChange={props.handleChange('confirmPassword')} />
                </div>
            </div>
        </form>
    );
}