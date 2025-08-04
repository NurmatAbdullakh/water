import { Column } from '@ant-design/plots';
import { Card } from 'antd';

const SiteTrafficChart = () => {
    const data = [
        { month: 'Jan', value: 120 },
        { month: 'Feb', value: 150 },
        { month: 'Mar', value: 80 },
        // и так далее
    ];

    const config = {
        data,
        xField: 'month',
        yField: 'value',
        label: false,
        columnStyle: {
            radius: [5, 5, 0, 0],
        },
        tooltip: {
            formatter: (datum: { value: number }) => ({ name: 'Site traffic', value: `${datum.value}` }),
        },
    };

    return (
        <Card title="Site Traffic (12 months)" extra={<span style={{ color: 'green' }}>+104%</span>}>
            <Column {...config} />
        </Card>
    );
};

export default SiteTrafficChart;
