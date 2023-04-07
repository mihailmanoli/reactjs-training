export default function PersonalInfo(props) {
    return (
        <form>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>   
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>User Name</label>
                    <input type="text" name="user-name" value={props.userName} onChange={props.handleChange('userName')} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>First Name</label>
                    <input type="text" name="user-firstname" value={props.firstName} onChange={props.handleChange('firstName')} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Last Name</label>
                    <input type="text" name="user-lastname" value={props.lastName} onChange={props.handleChange('lastName')} />
                </div>
            </div>
        </form>
    );
}