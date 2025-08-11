import { PlusOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { Button } from '../../components/CustomAntdComponents/Button'

export const UserTableTitle = () => {
    return (
        <Flex justify='space-between' align='center'>
            Users
            <Flex align='center' gap="12px">
                <Button icon={<PlusOutlined />} type='primary'>Create User</Button>
            </Flex>
        </Flex>
    )
}