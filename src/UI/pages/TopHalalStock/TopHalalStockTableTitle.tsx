import { PlusOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { Button } from '../../components/CustomAntdComponents/Button'
import Select from '../../components/CustomAntdComponents/Select'

export const TopHalalStockTableTitle = ({ onAddClick }: { onAddClick: () => void }) => {
    return (
        <div>
            <Flex justify='space-between' align='center' style={{ padding: "20px 24px" }}>
                Top Halal Stocks
                <Button size='large' icon={<PlusOutlined />} type='primary' onClick={onAddClick}>Add stock</Button>
            </Flex>
            <Flex justify='end' align='center' style={{ padding: "12px 24px", background: "#F5F5F5" }} >
                <Select placeholder="Sector" style={{ flex: "0 0 150px" }} />
            </Flex>
        </div>
    )
}