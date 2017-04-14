import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Quarter from './Quarter'

import {actions as employeeActions} from '../../ducks/employee'
import {actions as commonActions} from '../../ducks/common'
import {actions as financeDataActions} from '../../ducks/financeData'


class FinanceData extends Component {
    constructor(){
        super();
        // this.state = {
        //   isTable: false
        // }
        this.addQuarter = this.addQuarter.bind(this);
    }

    addQuarter(){
        let year = this.refs.quarterYear.value,
            numb = this.refs.quarterNumb.value;
            id = this.props.employees.activeEmployee;
        console.log(year, numb);
        this.props.addQuarter(year, numb, id);
    }


    render() {
        if(!this.props.isTable){
            return null;
        }

        return (
            <div className='finance-data'>
                <div>
                    <h1>Добавить новый квартал</h1>
                    <div>
                        <span>Год</span>
                        <input type="text" ref="quarterYear"/>
                    </div>
                    <div>
                        <span>Номер квартала</span>
                        <input type="text" ref="quarterNumb"/>
                    </div>
                    <div>
                        <button onClick={this.addQuarter}>ДОБАВИТЬ</button>
                    </div>
                </div>

                <hr />

                {this.props.quarters && this.props.quarters.length > 0  &&
                    this.props.quarters.map((item)=>{
                        return (
                            <Quarter key={item.id}
                                     item={item}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employee,
        quarters: state.financeData.list,
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
export default connect(mapStateToProps, mapDispatchToProps)(FinanceData)