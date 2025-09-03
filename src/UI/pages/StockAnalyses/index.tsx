import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { Color } from '../../../assets/colors'
import { EditIcon } from '../../../assets/icons'
import Table from '../../components/CustomAntdComponents/Table'
import { NameTableValue } from '../../components/TableValues/NameTableValue/NameTableValue'
import { StatusTagTableValue } from '../../components/TableValues/StatusTagTableValue/StatusTagTableValue'
import { TableActionButton } from '../../components/TableValues/TableActionButton/TableActionButton'
import { TextTableValue } from '../../components/TableValues/TextTableValue/TextTableValue'
import { StockAnalysesTableTitle } from './StockAnalysesTableTitle'

export default function StockAnalyses() {
    const columns = [
        {
            title: 'Name',
            key: 'name',
            render: (record: any) => (
                <NameTableValue avatarSrc={record.avatar} name={record.name} email={record.email} />
            ),
        },
        {
            title: 'Opt Out',
            dataIndex: 'optOut',
            key: 'optOut',
            render: (optOut: boolean) => (
                <StatusTagTableValue isActive={optOut} activeText='yes' inactiveText='no' />
            ),
        },
        {
            title: 'Purchases',
            dataIndex: 'purchases',
            key: 'purchases',
            render: (amount: number) => <TextTableValue text={`$${amount.toFixed(2)}`} />,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <StatusTagTableValue isActive={status === 'paid'} activeText='paid' inactiveText='not paid' />
            ),
        },
        {
            title: 'Last Login',
            dataIndex: 'lastLogin',
            key: 'lastLogin',
            render: (date: string) => <TextTableValue text={dayjs(date).format('MMM DD, YYYY')} />,
        },
        {
            key: 'actions',
            render: () => (
                <Link to={"PathGenerators.REPORT_DETAIL_ID(record.id)"}>
                    <TextTableValue color={Color.brand.secondary} text={"Report"} />
                </Link>
            ),
        },
        {
            key: 'actions',
            render: () => (
                <Link to={"PathGenerators.REPORT_DETAIL_ID(record.key)"}>
                    <TableActionButton icon={<EditIcon />} title='Edit' />
                </Link>
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
            title={() => <StockAnalysesTableTitle />}
        />
    )
}