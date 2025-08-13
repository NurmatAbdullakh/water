import { Divider } from "antd"
import { PageTitle } from "../../components/PageTitle/PageTitle"
import { UserFormBlockTemplate } from "../../components/UserFormBlockTemplate/UserFormBlockTemplate"

function UsersCreate() {
    return (
        <div>
            <PageTitle>Create New User</PageTitle>
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
export default UsersCreate