// CustomAntdComponents/Input.tsx

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

// Кастомный компонент
const CustomInput: React.FC<InputProps> = ({ className, ...props }) => {
    const classes = useStyles();
    return (
        <AntInput className={classNames(className, classes.customInput)} {...props} />
    );
};

(CustomInput as any).Password = AntInput.Password;
(CustomInput as any).TextArea = AntInput.TextArea;
(CustomInput as any).Search = AntInput.Search;

export const Input = CustomInput as typeof AntInput;
