import { Divider } from "antd"
import { UserFormBlockTemplate } from "../../components/UserFormBlockTemplate/UserFormBlockTemplate"

function PersonalInfo() {
    return (
        <div>
            <UserFormBlockTemplate
                title="Personal info"
                subtitle="Update photo and personal details."
                submitButtonText="Save changes"
                form={<></>}
            />
            <Divider />
            <UserFormBlockTemplate
                title="Change Password"
                subtitle="Update your protection."
                submitButtonText="Change Password"
                form={<></>}
            />
        </div>
    )
}
export default PersonalInfo