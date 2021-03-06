import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Item from './Item'
import NewEmployee from '../NewEmployee'
import ModalDelete from './ModalDelete'

import {actions as employeeActions} from '../../ducks/employee'
import {actions as commonActions} from '../../ducks/common'


class Employee extends Component {
    constructor(props) {
        super(props);

        props.getAllEmployees();

        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.reopen = this.reopen.bind(this);
        this.openModalNewEmployee = this.openModalNewEmployee.bind(this);
    }

    deleteEmployee(id, name) {
        this.props.setModal("Удаление пользователя", <ModalDelete id={id} name={name} />);
    }

    openModalNewEmployee(){
        this.props.setModal("Добавление нового сотрудника", <NewEmployee/>)
    }

    reopen(){
        this.props.offTable();
        this.props.setActiveYmployee(null);
    }

    render() {
        let isTable = this.props.isTable;

        return (
            <div className={"employee-list" + (!isTable ? "" : " mini")}>
                <div className="employee-list-inner">

                    <table className="table">
                        <tbody >
                        <tr className="employee-table-row table-header">
                            <td className="employee-table-cell">№</td>
                            <td className="employee-table-cell">фамилия</td>
                            <td className="employee-table-cell">имя</td>
                            <td className="employee-table-cell">отчество</td>
                            <td className="employee-table-cell">емейл</td>
                            <td className="employee-table-cell">отдел</td>
                            <td className="employee-table-cell">комментарий</td>
                            <td className="employee-table-cell">КВЕД</td>
                            <td className="employee-table-cell">
                                <svg viewBox="0 0 24 24"
                                     className="employee-new-btn"
                                     onClick={this.openModalNewEmployee}
                                >
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon_employee_add" />
                                </svg>
                            </td>

                            {this.props.isTable ?  (
                                            <svg viewBox="0 0 24 24"
                                                 className="employee-table-btn-open"
                                                 onClick={this.reopen}
                                            >
                                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon_open" />
                                            </svg>
                                ) : ""}

                        </tr>
                        </tbody>


                        {this.props.employee.list && this.props.employee.list.length > 0 && this.props.employee.list.map((item, index) => (
                            <Item item={item}
                                  key={index}
                                  index={index}
                                  delete={this.deleteEmployee}
                            />
                        ))}

                    </table>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee,
        isTable: state.common.isTable
    }
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        ...commonActions,
        ...employeeActions
    }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Employee)
