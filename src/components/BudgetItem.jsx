// helper functions
import { Form, Link } from "react-router-dom";
import { calculateSpentByBudget, formatCurrency, formatPercentage } from "../libs/helpers";
import PropTypes from 'prop-types';
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline"

const BudgetItem = ({ budget, showDelete }) => {
    const { id, name, amount, color } = budget;
    const spent = calculateSpentByBudget(id);

    return (
        <div
            className="budget"
            style={{
                "--accent": color
            }}
        >
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeted</p>
            </div>
            <progress max={amount} value={spent}>
                {formatPercentage(spent / amount)}
            </progress>
            <div className="progress-text">
                <small>{formatCurrency(spent)} spent</small>
                <small>{formatCurrency(amount - spent)} remaining</small>
            </div>
            {
                showDelete ? (
                    <div className="flex-sm">
                        <Form
                            method="post"
                            action="delete"
                            onSubmit={(event) => {
                                if (!confirm("Are you sure?")) {
                                    event.preventDefault();
                                }
                            }}>
                            <button type="submit" className="btn">
                                <span>Delete Budget</span>
                                <TrashIcon width={20} />
                            </button>
                        </Form>
                    </div>
                ) : (
                    <div className="flex-sm">
                        <Link
                            to={`budget/${id}`}
                            className="btn">
                            Detail
                            <BanknotesIcon width={20} />
                        </Link>
                    </div>
                )
            }
        </div>
    )
}
BudgetItem.propTypes = {
    budget: PropTypes.object,
    showDelete: PropTypes.bool.isRequired,
}
BudgetItem.defaultProps = {
    showDelete: false,
}
export default BudgetItem
