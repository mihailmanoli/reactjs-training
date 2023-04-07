export default function ProfessionalInfo(props) {
    return (
        <form>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px"}}>   
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Current Company</label>
                    <input type="text" name="user-current-company" value={props.currentCompany} onChange={props.handleChange('currentCompany')} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Total Experience</label>
                    <input type="text" name="user-total-experience" value={props.totalExperience} onChange={props.handleChange('totalExperience')} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px"}}>
                    <label>Designation</label>
                    <input type="text" name="user-designation" value={props.designation} onChange={props.handleChange('designation')} />
                </div>
            </div>
        </form>
    );
}