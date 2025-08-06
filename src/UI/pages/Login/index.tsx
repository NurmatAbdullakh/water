import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../../router/paths";
import styles from './index.module.css';

function Login() {
    return (
        <div>
            <div className={styles.authFormContainer}>
                <div className={styles.authHeader}>
                    <img src="/Logo.svg" alt="Logo" className={styles.authLogo} />
                    <Typography.Title level={3}>Welcome Back</Typography.Title>
                    <Typography.Text type="secondary">Sign in to your account to continue</Typography.Text>
                </div>
                <Form className={styles.authForm} layout="vertical">
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Email" size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
                    </Form.Item>

                    <Form.Item>
                        <Row justify="space-between" align="middle">
                            <Checkbox>Remember me</Checkbox>
                            <Link to={Paths.FORGOT_PASSWORD}>
                                <Typography.Link>Forgot password?</Typography.Link>
                            </Link>
                        </Row>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
                <div className={styles.authFooter}>
                    <Typography.Text>Don't have an account? </Typography.Text>
                    <Link to={Paths.SIGN_UP}>
                        <Typography.Link>Sign up</Typography.Link>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login