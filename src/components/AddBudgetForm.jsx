import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmit = fetcher.state === "submitting";

    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => {
        if (!isSubmit) {
            formRef.current.reset();
            focusRef.current.focus();
        }
    }, [isSubmit]);

    return (
        <div className="form-wrapper">
            <h2 className="h2">Create budget</h2>
            <fetcher.Form method="post" className="grid-sm" ref={formRef}>
                <span className="grid-xs">
                    <label htmlFor="newBudget">Budget name</label>
                    <input
                        type="text"
                        name="newBudget"
                        id="newBudget"
                        required
                        placeholder="Health"
                        ref={focusRef}
                    />
                </span>
                <span className="grid-xs">
                    <label htmlFor="budgetAmount"></label>
                    <input
                        type="number"
                        step="0.01"
                        name="newBudgetAmount"
                        id="newBudgetAmount"
                        required
                        placeholder="350$"
                        inputMode="decimal"
                    />
                </span>
                <input type="hidden" name="_action" value="createBudget" />
                <button type="submit" className="btn btn--dark" disabled={isSubmit}>
                    {isSubmit ? (
                        <span>Submitting...</span>
                    ) : (
                        <>
                            <span>Create Budget</span>
                            <CurrencyDollarIcon width={20} />
                        </>
                    )}
                </button>
            </fetcher.Form>
        </div>
    );
};

export default AddBudgetForm;
