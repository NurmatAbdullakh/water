import { Flex } from "antd"
import Table from "../../components/CustomAntdComponents/Table"
import { NameTableValue } from "../../components/TableValues/NameTableValue/NameTableValue"
import { AdminRolesTableTitle } from "./AdminRolesTableTitle"
import { TableActionButton } from "../../components/TableValues/TableActionButton/TableActionButton"
import { EditIcon, TrashtIcon } from "../../../assets/icons"
import { TextTableValue } from "../../components/TableValues/TextTableValue/TextTableValue"

function AdminRoles() {
    const columns = [
        {
            title: 'Name',
            key: 'name',
            innerWidth: "744px",
            render: (record: any) => (
                <NameTableValue avatarSrc={record.avatar} name={record.name} email={record.email} />
            ),
        },
        {
            title: 'Role',
            dataIndex: 'Role',
            key: 'Role',
            innerWidth: "72px",
            render: (optOut: boolean) => (
                <>role</>
            ),
        },
        {
            title: 'Revenue Share',
            dataIndex: 'Revenue Share',
            key: 'Revenue Share',
            innerWidth: "135px",
            render: (amount: number) => <TextTableValue text={"-"} />,
        },
        {
            key: 'actions',
            render: () => (
                <Flex gap={2} align='center'>
                    <TableActionButton icon={<TrashtIcon />} title='Delete' />
                    <TableActionButton icon={<EditIcon />} title='Edit' />
                </Flex>
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
            title={() => <AdminRolesTableTitle />}
        />

    )
}
export default AdminRoles