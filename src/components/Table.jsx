import PropTypes from "prop-types";
import ExpenseItem from './ExpenseItem'

const Table = ({ expenses, showBudget }) => {
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        {
                            ["Name", "Amount", "Date", showBudget ? "Budget" : "", "",].map((item, idx) => (
                                <th key={idx}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <ExpenseItem expense={expense} showBudget={showBudget} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    expenses: PropTypes.array.isRequired,
    showBudget: PropTypes.bool,
}
Table.defaultProps = {
    showBudget: true,
}
export default Table