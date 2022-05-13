import "./layout.sass";
import Table from "../Table";
import TableDataContext from "../../context/tableDataContext";
import { useContext } from "react";

const Layout = () => {
    const data = useContext(TableDataContext)
    const tableHeading = ['Header 1', 'Header 2']
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <Table heading={tableHeading} data={data}/>
        </div>
    )
}

export default Layout