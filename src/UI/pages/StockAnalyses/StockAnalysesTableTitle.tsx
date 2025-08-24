import { Flex, Tag } from 'antd'
import dayjs from 'dayjs'


export const StockAnalysesTableTitle = () => {
    return (
        <Flex align='center' gap={8}>
            Stock Analyses
            <Tag color='purple' >Updated: {dayjs(new Date()).format('MMM DD, YYYY')}</Tag>
        </Flex>
    )
}