import { LockOutlined, UserOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../../router/paths";
import styles from './index.module.css';

export const SignUp = () => {
    return (
        <div>
            <div className={styles.authFormContainer}>
                <div className={styles.authHeader}>
                    <img src="/Logo.svg" alt="Logo" className={styles.authLogo} />
                    <Typography.Title level={3}>Sign up</Typography.Title>
                </div>
                <Form className={styles.authForm} layout="vertical">
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input
                            prefix={<UserAddOutlined />}
                            placeholder="Name"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please enter a valid email!' }
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Email"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            { min: 8, message: 'Password must be at least 8 characters!' }
                        ]}
                        extra="Must be at least 8 characters."
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            Get started
                        </Button>
                    </Form.Item>
                </Form>
                <div className={styles.authFooter}>
                    <Typography.Text>Already have an account? </Typography.Text>
                    <Link to={Paths.LOGIN}>
                        <Typography.Text>Log in</Typography.Text>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;