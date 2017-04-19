import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Quarter from './Quarter'

import {actions as employeeActions} from '../../ducks/employee'
import {actions as commonActions} from '../../ducks/common'
import {actions as financeDataActions} from '../../ducks/financeData'


class FinanceData extends Component {
    constructor(props){
        super(props);
        this.state = {
            year: 2017,
            quarter: 1
        };

        this.addQuarter = this.addQuarter.bind(this);
    }

    addQuarter(){
        let year = this.state.year,
            numb = this.state.quarter,
            id = this.props.employees.activeEmployee;
        console.log(year, numb);
        this.props.addQuarter(year, numb, id);
        this.setState({
            year: 2017,
            quarter: 1
        });
    }


    render() {
        if(!this.props.isTable){
            return null;
        }
        let nowYear = 2017;
        let listYear = [];
        for(let i = nowYear; i > 2000; i--){
            listYear.push(i)
        }

        return (
            <div className='finance-data'>
                <div className="quarter-add-container">
                    <h1>Добавить новый квартал</h1>

                    <SelectField
                        floatingLabelText="Год"
                        value={this.state.year}
                        onChange={(event, index, value)=>this.setState({year: value})}
                    >
                        {listYear.map((item)=><MenuItem value={item} primaryText={item} />)}

                    </SelectField>

                    <SelectField
                        floatingLabelText="Квартал"
                        value={this.state.quarter}
                        onChange={(event, index, value)=>this.setState({quarter: value})}
                    >
                        <MenuItem value={1} primaryText="Q1" />
                        <MenuItem value={2} primaryText="Q2" />
                        <MenuItem value={3} primaryText="Q3" />
                        <MenuItem value={4} primaryText="Q4" />
                    </SelectField>



                        <button onClick={this.addQuarter}
                                className="tax-btn quarter-add-btn"
                        >
                            ДОБАВИТЬ
                        </button>
                </div>



                <div className="quarter-container">

                    <div className="quarter-container-inner">



                        {this.props.quarters && this.props.quarters.length > 0  &&
                            this.props.quarters.map((item, index)=>{
                                return (
                                    <Quarter key={item.id}
                                             index={index}
                                             item={item}
                                    />
                                )
                            })
                        }

                    </div>

                </div>

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
