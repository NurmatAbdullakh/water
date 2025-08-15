import { Divider } from "antd"
import { PageTitle } from "../../components/PageTitle/PageTitle"
import { UserFormBlockTemplate } from "../../components/UserFormBlockTemplate/UserFormBlockTemplate"
import PersonalInfoForm from "../../components/Forms/PersonalInfoForm"
import { FormIds } from "../../../type"

function UsersCreate() {
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
        </div>
    )
}
export default UsersCreate