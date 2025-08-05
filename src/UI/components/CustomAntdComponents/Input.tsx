import React from 'react';
import { Input as AntInput, type InputProps } from 'antd';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { Color } from '../../../assets/colors';

const useStyles = createUseStyles({
    customInput: {
        borderRadius: "8px",
        padding: '8px 12px',
        fontSize: 14,
        transition: 'all 0.3s ease',
        border: `1px solid ${Color.border.primary}`,
    },
});

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
    const classes = useStyles();

    return (
        <AntInput className={classNames(className, classes.customInput)} {...props} />
    );
};

export const { Password, TextArea, Search } = AntInput;
