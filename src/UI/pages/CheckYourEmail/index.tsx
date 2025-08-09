import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../../router/paths";
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
    actions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    resendLink: {
        textAlign: 'center',
        cursor: 'pointer'
    },
    backLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '16px'
    }
});

export const CheckYourEmail = () => {
    const classes = useStyles();

    const handleResend = () => {
        // Logic to resend email
        console.log('Resending email...');
    };

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <img src="/Logo.svg" alt="Logo" className={classes.logo} />
                <Typography.Title level={4} style={{ margin: 0 }}>Check your email</Typography.Title>
                <Typography.Text type="secondary">We sent a password reset link to olivia@untitledui.com</Typography.Text>
            </div>

            <div className={classes.actions}>
                <Button type="primary" size="large" block>
                    Open email app
                </Button>
                <Typography.Text 
                    className={classes.resendLink} 
                    onClick={handleResend}
                    underline
                >
                    Didn't receive the email? Click to resend
                </Typography.Text>
            </div>

            <Link to={Paths.LOGIN} className={classes.backLink}>
                <ArrowLeftOutlined />
                <Typography.Text>Back to log in</Typography.Text>
            </Link>
        </div>
    );
};

export default CheckYourEmail;