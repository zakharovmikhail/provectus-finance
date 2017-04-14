import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {actions as employeeActions} from '../../ducks/employee'
import {actions as commonActions} from '../../ducks/common'
import {actions as financeDataActions} from '../../ducks/financeData'


class Quarter extends Component {
    constructor(props) {
        super(props);


        // this.onSelected = this.onSelected.bind(this);
    }


    render(){
        let item = this.props.item;

        return(
            <div>

                <h1>Quarter {item.quarterDefinition.year + " " + item.quarterDefinition.quarterName}</h1>

                <table>
                    <tbody>
                    <tr>    				 
                        <td>Наименование Контрагента</td>
                        <td>Дата поступения денежных средств</td>
                        <td>Доллары</td>
                        <td>Гривна</td>
                        <td>Курс НБУ на дату поступления</td>
                        <td>Эквивалент в гривне по курсу НБУ к налогообложению</td>
                        <td>Сумма к налогообложению</td>
                        <td>Период</td>
                        <td>Начислено</td>
                        <td>Оплачено</td>
                        <td>Дата оплаты</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        employee: state.employee,
        isTable: state.common.isTable
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        ...commonActions,
        ...employeeActions,
        ...financeDataActions
    }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Quarter)