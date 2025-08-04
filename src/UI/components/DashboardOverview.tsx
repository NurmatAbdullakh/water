import { Card, Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const DashboardOverview = () => (
    <Row gutter={16}>
        <Col span={8}>
            <Card>
                <Statistic
                    title="Purchases"
                    value={2114.4}
                    precision={2}
                    prefix="$"
                    valueStyle={{ color: '#3f8600' }}
                    suffix={<ArrowUpOutlined />}
                />
            </Card>
        </Col>
        <Col span={8}>
            <Card>
                <Statistic
                    title="Active Users"
                    value={2934}
                    valueStyle={{ color: '#3f8600' }}
                    suffix="%"
                    prefix={<ArrowUpOutlined />}
                />
            </Card>
        </Col>
        <Col span={8}>
            <Card>
                <Statistic
                    title="LTV"
                    value={88.1}
                    precision={2}
                    prefix="$"
                    valueStyle={{ color: '#3f8600' }}
                    suffix={<ArrowUpOutlined />}
                />
            </Card>
        </Col>
    </Row>
);

export default DashboardOverview;
