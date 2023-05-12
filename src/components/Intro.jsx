import React from "react";
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import mainIllustration from '../assets/illustration.jpg'

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Take control of <span className="accent">Your money</span>
                </h1>
                <p>
                    Personal budgeting is the secret of financial freedom. Start your
                    journey today.
                </p>
                <Form method="post">
                    <input
                        type="text"
                        name="userName"
                        required
                        minLength={2}
                        maxLength={14}
                        placeholder="What is your name?"
                        aria-label="Your name"
                        autoComplete="given-name"
                    />
                    <input type="hidden" name="_action" value="newUser" />
                    <button type="submit" className="btn btn--dark">
                        <span>Create account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={mainIllustration} width={600} alt="Person with money" />
        </div>
    );
};

export default Intro;
