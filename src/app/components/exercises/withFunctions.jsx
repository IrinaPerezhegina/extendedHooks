import React from "react";
import CollapseWrapper from "../common/collapse";

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("auth") === "token";
    const onLogin = () => {
        return localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        return delete localStorage.clear();
    };

    return (
        <>
            <CollapseWrapper>
                <SimpleComponent
                    {...props}
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                    isAuth={isAuth}
                />
            </CollapseWrapper>
        </>
    );
};

export default withFunctions;
