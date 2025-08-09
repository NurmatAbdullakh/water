import { Checkbox, Form, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../../router/paths";
import { Input } from "../../components/CustomAntdComponents/Input";
import styles from './index.module.css';
import { Button } from "../../components/CustomAntdComponents/Button";
import { Color } from "../../../assets/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    secondaryText: {
        color: Color.text.tertiary[600],
    }
})

function Login() {
    const classes = useStyles()
    return (
        <div>
            <div className={styles.authFormContainer}>
                <div className={styles.authHeader}>
                    <img src="/Logomark.png" alt="Logo" className={styles.authLogo} />
                    <Typography.Title className={styles.title} level={2}>Welcome Back</Typography.Title>
                    <Typography.Text className={styles.subtitle} type="secondary">Welcome back! Please enter your details.</Typography.Text>
                </div>
                <Form className={styles.authForm} layout="vertical">
                    <Form.Item
                        required={false}
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Enter your email" size="large" />
                    </Form.Item>
                    <Form.Item
                        required={false}
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Enter your password" size="large" />
                    </Form.Item>

                    <Form.Item>
                        <Row justify="space-between" align="middle">
                            <Checkbox>Remember for 30 days</Checkbox>
                            <Link to={Paths.FORGOT_PASSWORD} >
                                <Typography.Text className="linkText">Forgot password?</Typography.Text>
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
                    <Typography.Text className={classes.secondaryText}>Don't have an account? </Typography.Text>
                    <Link to={Paths.SIGN_UP}>
                        <Typography.Text className="linkText">Sign up</Typography.Text>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login