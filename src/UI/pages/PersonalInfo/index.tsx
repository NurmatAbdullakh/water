import { Divider } from "antd"
import { UserFormBlockTemplate } from "../../components/UserFormBlockTemplate/UserFormBlockTemplate"
import { PageTitle } from "../../components/PageTitle/PageTitle"
import { FormIds } from "../../../type"
import PersonalInfoForm from "../../components/Forms/PersonalInfoForm"
import { ChangePasswordForm } from "../../components/Forms/ChangePasswordForm"

function PersonalInfo() {
    return (
        <div>
            <PageTitle>Create New User</PageTitle>
            <UserFormBlockTemplate
                SubmitButtonFormId={FormIds.PersonalInfo}
                title="Personal info"
                subtitle="Update photo and personal details."
                submitButtonText="Save changes"
                form={<PersonalInfoForm type="create" onSubmit={(data) => console.log(data)} />}
            />
            <Divider />
            <UserFormBlockTemplate
                SubmitButtonFormId={FormIds.ChangePassword}
                title="Change Password"
                subtitle="Update your protection."
                submitButtonText="Change Password"
                form={<ChangePasswordForm onSubmit={(data) => console.log(data)} />}
            />
        </div>
    )
}
export default PersonalInfo