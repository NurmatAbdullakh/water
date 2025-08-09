import { ArrowLeftOutlined, LockOutlined } from "@ant-design/icons";
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
    passwordChecks: {
        marginTop: '-16px',
        marginBottom: '8px'
    },
    checkItem: {
        fontSize: '12px',
        color: '#667085'
    },
    backLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '16px'
    }
});

export const SetNewPassword = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <img src="/Logo.svg" alt="Logo" className={classes.logo} />
                <Typography.Title level={4} style={{ margin: 0 }}>Set new password</Typography.Title>
                <Typography.Text type="secondary">Your new password must be different to previously used passwords.</Typography.Text>
            </div>

            <Form className={classes.form} layout="vertical">
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 8, message: 'Password must be at least 8 characters!' },
                        { pattern: /[!@#$%^&*(),.?":{}|<>]/, message: 'Password must contain one special character!' }
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Enter password" size="large" />
                </Form.Item>

                <div className={classes.passwordChecks}>
                    <div className={classes.checkItem}>• Must be at least 8 characters</div>
                    <div className={classes.checkItem}>• Must contain one special character</div>
                </div>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Confirm password" size="large" />
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

export default SetNewPassword;