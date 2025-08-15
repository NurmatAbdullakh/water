import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Select, Upload } from 'antd';
import type { FC } from 'react';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { FormIds, type FormTypeType } from '../../../type';
import { Input } from '../CustomAntdComponents/Input';

const { TextArea } = Input;

interface PersonalInfoFormProps {
    type: FormTypeType;
    onSubmit: (values: any) => void;
}

const useStyles = createUseStyles({
    avatarSection: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .anticon': {
            fontSize: 48,
            color: '#bfbfbf',
        },
    },
});

const PersonalInfoForm: FC<PersonalInfoFormProps> = ({ type, onSubmit }) => {
    const classes = useStyles();
    const [form] = Form.useForm();
    const [charCount, setCharCount] = React.useState(275);

    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    return (
        <Form
            id={FormIds.PersonalInfo}
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
        >
            <Form.Item
                name="fullName"
                label="Full Name"
                rules={[{ required: true, message: 'Please input your full name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="Email Address"
                rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item name="avatar">
                <div className={classes.avatarSection}>
                    <div className={classes.avatar}>
                        <UserOutlined />
                    </div>
                    <Upload>
                        <Button icon={<UploadOutlined />}>Upload Avatar</Button>
                    </Upload>
                </div>
            </Form.Item>

            <Form.Item
                name="role"
                label="Role"
                rules={[{ required: true, message: 'Please select a role!' }]}
            >
                <Select>
                    <Select.Option value="admin">Admin</Select.Option>
                    <Select.Option value="user">User</Select.Option>
                    <Select.Option value="manager">Manager</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item name="note" label="Note">
                <TextArea
                    maxLength={275}
                    showCount={{
                        formatter: ({ count }) => {
                            setCharCount(275 - count);
                            return `${charCount} characters left`;
                        },
                    }}
                />
            </Form.Item>

            {type === 'create' && (
                <>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="repeatPassword"
                        label="Repeat Password"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error('The two passwords do not match!')
                                    );
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </>
            )}
        </Form>
    );
};

export default PersonalInfoForm;
