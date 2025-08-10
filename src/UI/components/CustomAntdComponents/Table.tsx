import { Table as AntTable, type TableProps } from 'antd';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { Color } from '../../../assets/colors';

const useStyles = createUseStyles({
    customTable: {
        "& .ant-table-title": {
            fontSize: "18px",
            fontWeight: "600",
            borderRadius: "12px 12px 0 0 !important"
        },
        "& .ant-table-thead": {
            "& .ant-table-cell": {
                background: "white !important",
                padding: "12px 24px",
                color: Color.text.quaternary[500],
                fontWeight: "600",
                fontSize: "12px"
            }
        },
        "& table": {
            borderRadius: "0 0 12px 12px !important"
        }
    }
});

export interface CustomTableProps<T> extends TableProps<T> {
    className?: string;
}

export function Table<T extends object = any>(props: CustomTableProps<T>) {
    const { className, ...restProps } = props;
    const classes = useStyles();

    return (
        <AntTable
            {...restProps}
            className={classNames(classes.customTable, className)}
            pagination={{
                showSizeChanger: true,
                showQuickJumper: true,
                ...props.pagination,
            }}
        />
    );
}

export default Table;
