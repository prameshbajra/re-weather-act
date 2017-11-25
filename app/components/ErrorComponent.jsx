import React from "react";

class ErrorComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    }
    render() {
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h3 className="text-center">Oops!</h3>
                <p>There seems to be no location like that, We are really sorry.</p>
                <p>
                    <button className="hollow button info" data-close="" aria-label="Close modal" type="button">
                        Okay
                    </button>
                </p>
            </div>
        );
    }
}

export default ErrorComponent;