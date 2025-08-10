import { DeleteOutlined, EditOutlined, MailOutlined, } from '@ant-design/icons'
import { Avatar, Space, Tag } from 'antd'
import dayjs from 'dayjs'
import Table from '../../components/CustomAntdComponents/Table'
import { UserTableTitle } from './UserTableTitle'

export default function Users() {
    const columns = [
        {
            title: 'Name',
            key: 'name',
            render: (record: any) => (
                <Space>
                    <Avatar src={record.avatar} />
                    <div>
                        <div>{record.name}</div>
                        <div>{record.email}</div>
                    </div>
                </Space>
            ),
        },
        {
            title: 'Opt Out',
            dataIndex: 'optOut',
            key: 'optOut',
            render: (optOut: boolean) => (
                <Tag color={optOut ? 'red' : 'green'}>
                    {optOut ? 'Yes' : 'No'}
                </Tag>
            ),
        },
        {
            title: 'Purchases',
            dataIndex: 'purchases',
            key: 'purchases',
            render: (amount: number) => `$${amount.toFixed(2)}`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'paid' ? 'green' : 'red'}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Last Login',
            dataIndex: 'lastLogin',
            key: 'lastLogin',
            render: (date: string) => dayjs(date).format('MMM DD, YYYY'),
        },
        {
            title: 'Joined',
            dataIndex: 'joined',
            key: 'joined',
            render: (date: string) => dayjs(date).format('MMM DD, YYYY'),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: () => (
                <Space size="middle">
                    <EditOutlined />
                    <DeleteOutlined />
                    <MailOutlined />
                </Space>
            ),
        },
    ]

    const mockData = [
        {
            key: '1',
            name: 'John Doe',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            email: 'john@example.com',
            optOut: false,
            purchases: 100.14,
            status: 'no',
            lastLogin: '2025-01-16',
            joined: '2025-01-16',
        },
        {
            key: '1',
            name: 'John Doe',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            email: 'john@example.com',
            optOut: true,
            purchases: 100.14,
            status: 'paid',
            lastLogin: '2025-01-16',
            joined: '2025-01-16',
        },
    ]

    return (
        <Table
            bordered
            scroll={{ x: 1600 }}
            columns={columns}
            dataSource={mockData}
            title={() => <UserTableTitle />}
        />
    )
}