import React from 'react';
import { Input as AntInput, type InputProps } from 'antd';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
    customInput: {
        '&.ant-input': {
            borderRadius: 8,
            padding: '8px 12px',
            fontSize: 14,
            transition: 'all 0.3s ease',

            '&:hover': {
                borderColor: '#40a9ff',
                boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.1)',
            },

            '&:focus': {
                borderColor: '#1890ff',
                boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
                outline: 'none',
            },
        },

        '& .ant-input-disabled': {
            backgroundColor: '#f5f5f5',
            cursor: 'not-allowed',
        },

        '& .ant-input-affix-wrapper': {
            borderRadius: 8,

            '&:hover': {
                borderColor: '#40a9ff',
            },

            '&:focus': {
                borderColor: '#1890ff',
                boxShadow: '0 0 0 2px rgba(24, 144, 255, 0.2)',
            },
        },
    },
});

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
    const classes = useStyles();

    return (
        <AntInput className={classNames(className, classes.customInput)} {...props} />
    );
};

export const { Password, TextArea, Search } = AntInput;
