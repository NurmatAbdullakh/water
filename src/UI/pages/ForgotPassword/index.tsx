import { ArrowLeftOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../../router/paths";
import { Input } from "../../components/CustomAntdComponents/Input";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
    },
    logo: {
        height: '32px',
        marginBottom: '8px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
    },
    backLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '16px'
    }
});

export const ForgotPassword = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <img src="/Logo.svg" alt="Logo" className={classes.logo} />
                <Typography.Title level={4} style={{ margin: 0 }}>Forgot password?</Typography.Title>
                <Typography.Text type="secondary">No worries, we'll send you reset instructions.</Typography.Text>
            </div>

            <Form className={classes.form} layout="vertical">
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                >
                    <Input prefix={<MailOutlined />} placeholder="Enter your email" size="large" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block>
                        Reset password
                    </Button>
                </Form.Item>
            </Form>

            <Link to={Paths.LOGIN} className={classes.backLink}>
                <ArrowLeftOutlined />
                <Typography.Text>Back to log in</Typography.Text>
            </Link>
        </div>
    );
};

export default ForgotPassword;