import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import "./index.css";

export const AuthLayout = () => {
    return (
        <Row className="auth-layout">
            <Col xs={24} md={12} className="auth-left">
                <Outlet />
            </Col>
            <Col xs={0} md={12} className="auth-right">
                <div className="auth-image"></div>
            </Col>
        </Row>
    )
}