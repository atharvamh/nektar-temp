import React, { Fragment, useState } from "react";
import { TProps, THProps, TBProps } from "../../interfaces"
import { classNames } from "../../utils/helper"
import { toast } from "react-toastify";
import "./table.sass";

const Table = ({width = "auto", height = "auto", heading, data} : TProps) => {
    const bodyData = [...data];
    return (
        <table className="table table-bordered table-striped" style={{ width: width, height: height}}>
            <TableHeader heading={heading}/>
            <TableBody data={bodyData} />
        </table>
    )
}

const TableHeader = ({heading}: THProps) => {
    return (
        <thead className="thead-light">
            <tr>
                {
                    heading.map((item: string, index: number) => 
                        <th scope="col" key={`head-${index}`}>{item}</th>
                    )
                }
            </tr>
        </thead>
    )
}

const TableBody = ({data} : TBProps) => {
    return (
        <tbody>
            {
                data.map((row: any, index: number) => 
                    <Fragment key={`row-${index}`}>
                        <TableRow row={row}/>
                    </Fragment>
                )
            }
        </tbody>
    )
}

const TableRow = ({row}: any) => {
    return (
        <tr>
            {
                row.map((value: any, index: number) => 
                    <Fragment key={`cell-${index}`}>
                        <TableCell cellvalue={value} />
                    </Fragment>
                )
            }
        </tr>
    )
}

const TableCell = ({cellvalue} : any) => {

    const [value, setValue] = useState(cellvalue);
    const [showHint, setShowHint] = useState(false);
    const [enableEdit, setEnableEdit] = useState(false);

    const enableCellEdit = () => {
        setEnableEdit(true);
    }

    const updateCellValue = (e: any) => {
        if(e.key === 'Enter'){
            if(value?.label.trim().length === 0){
                toast.dismiss();
                toast('Cell value cannot be empty', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    className:'base-toast',
                    type: 'error'
                })
            }

            else{
                setEnableEdit(false)
            }
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...value,
            label: e.target.value
        })
    } 

    const updateShowHint = () => {
        setShowHint(!showHint);
    }

    const stopProp = (e: any) => {
        e.stopPropagation();
    }

    const Cell = () => {
        return (
            <td 
                className={classNames((value?.editable && !enableEdit) ? "editable" : "", value?.hint ? "hasHint" : "", "textcell")}
                onClick={(e) => {value?.hint ? updateShowHint() : stopProp(e)}}
                onDoubleClick={(e) => {value?.editable ? enableCellEdit() : stopProp(e)}}
            >
                {!enableEdit && value?.label}
                {
                    value?.hint && showHint && !enableEdit &&
                    <div className={classNames(value?.icon ? "i-popup" : "popup")}>
                        {value?.icon && <i className="bi bi-exclamation-diamond-fill"></i> }
                        <span className={classNames(value?.icon ? "hinttext" : "")}>
                            {value?.hint}
                        </span>
                    </div>
                }
                {
                    enableEdit &&
                    <input type="text" className="form-control" value={value?.label} autoFocus={true} 
                    onChange={(e) => handleInputChange(e)} onKeyDown={(e) => updateCellValue(e)}/>
                }
            </td>
        )
    }

    return (
        value?.icon ? 
        (
            <tr>
                <td className={classNames(value?.editable ? "editable" : "", value?.hint ? "hasHint" : "", "iconcell")}
                    onClick={(e) => {value?.hint ? updateShowHint() : stopProp(e)}}
                >
                    <i className="bi bi-exclamation-diamond-fill"></i>
                </td>
                <Cell />
            </tr>
        ) : (
            <Cell />
        )
        
    )
}

export default Table