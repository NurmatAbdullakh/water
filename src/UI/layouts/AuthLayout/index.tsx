import { Col, Row } from "antd";
import { createUseStyles } from "react-jss";
import { Outlet, useLocation } from "react-router-dom";
import "./index.css";

const useStyles = createUseStyles({
    '@keyframes slideInFade': {
        '0%': {
            opacity: 0,
            transform: 'translateY(30px)'
        },
        '50%': {
            opacity: 0.5,
            transform: 'translateY(15px)'
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)'
        }
    },
    '@keyframes scaleInFade': {
        '0%': {
            opacity: 0,
            transform: 'scale(0.95)'
        },
        '100%': {
            opacity: 1,
            transform: 'scale(1)'
        }
    },
    outletContainer: {
        animation: '$slideInFade 0.6s cubic-bezier(0.16, 1, 0.3, 1), $scaleInFade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        willChange: 'transform, opacity'
    }
});

export const AuthLayout = () => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <Row className="auth-layout">
            <Col xs={24} md={12} className="auth-left">
                <div key={location.pathname} className={classes.outletContainer}>
                    <Outlet />
                </div>
            </Col>
            <Col xs={0} md={12} className="auth-right">
                <div className="auth-image"></div>
            </Col>
        </Row>
    )
}