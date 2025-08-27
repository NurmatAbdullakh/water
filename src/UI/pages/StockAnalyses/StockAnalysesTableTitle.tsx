import { Flex, Tag } from 'antd'
import dayjs from 'dayjs'


export const StockAnalysesTableTitle = () => {
    return (
        <Flex align='center' gap={8} style={{ padding: "20px 24px" }}>
            Stock Analyses
            <Tag color='purple' >Updated: {dayjs(new Date()).format('MMM DD, YYYY')}</Tag>
        </Flex>
    )
}