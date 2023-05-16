import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";
import PropTypes from 'prop-types';

const AddExpenseForm = ({ budgets }) => {
    const fetcher = useFetcher();
    const isSubmit = fetcher.state === "submitting"
    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => {
        if (!isSubmit) {
            formRef.current.reset();
            formRef.current.focus()
        }
    }, [isSubmit])

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Add new{" "}
                <span className="accent">
                    {budgets.length === 1 && `${budgets.map((item) => item.name)}`}
                </span>{" "}
                Expense
            </h2>
            <fetcher.Form method="post" className="grid-sm" ref={formRef}>
                <div className="expense-inputs">
                    <div className="grid-xs">
                        <label htmlFor="newExpense">Expense name</label>
                        <input
                            type="text"
                            name="newExpense"
                            id="newExpense"
                            placeholder="Coffee"
                            required
                            ref={focusRef}
                        />
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Expense name</label>
                        <input
                            type="number"
                            name="newExpenseAmount"
                            id="newExpenseAmount"
                            placeholder="2,49"
                            step="0.01"
                            inputMode="decimal"
                            required
                            ref={focusRef}
                        />
                    </div>
                    <div className="grid-xs" hidden={budgets.length === 1}>
                        <label htmlFor="newExpenseBudget">Budget category</label>
                        <select name="newExpenseBudget" id="newExpenseBudget" required>
                            {budgets
                                .sort((a, b) => a.createdAt - b.createdAt)
                                .map((budget) => (
                                    <option key={budget.id} value={budget.id}>{budget.name}</option>
                                ))}
                        </select>
                    </div>
                </div>

                <input type="hidden" name="_action" value="createExpense" />
                <button type="submit" className="btn btn--dark" disabled={isSubmit}>
                    {isSubmit ? (
                        <span>Submitting...</span>
                    ) : (
                        <>
                            <span>Add Expense</span>
                            <PlusCircleIcon width={20} />
                        </>
                    )}
                </button>
            </fetcher.Form>
        </div>
    );
};

AddExpenseForm.propTypes = {
    budgets: PropTypes.array,
}
export default AddExpenseForm;
