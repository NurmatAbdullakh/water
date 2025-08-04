import { Line } from '@ant-design/plots';
import { Card } from 'antd';

const PurchasesChart = () => {
    const data = Array.from({ length: 30 }, (_, i) => ({
        day: i + 1,
        purchases: Math.random() * 1000 + 7000, // пример
    }));

    const config = {
        data,
        xField: 'day',
        yField: 'purchases',
        smooth: true,
        tooltip: {
            formatter: (datum: { purchases: number }) => ({ name: 'Purchases', value: `$${datum.purchases.toFixed(2)}` }),
        },
    };

    return (
        <Card title="Purchases (30 days)">
            <Line {...config} />
        </Card>
    );
};

export default PurchasesChart;
