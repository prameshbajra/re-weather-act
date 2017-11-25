import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server"
import PropTypes from "prop-types";

class ErrorComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        title: "Oops!"
    };
    static propTypes = {
        title: PropTypes.string,
        errorMessage: PropTypes.string.isRequired
    };
    componentDidMount() {
        const { title, errorMessage } = this.props;
        const skeletonMark = (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h3 className="text-center">{title}</h3>
                <p>{errorMessage}</p>
                <p>
                    <button className="hollow button info" data-close="" aria-label="Close modal" type="button">
                        Okay
                    </button>
                </p>
            </div>
        );

        const $modal = $(ReactDOMServer.renderToString(skeletonMark));
        $(ReactDOM.findDOMNode(this)).html($modal);

        const modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    }
    render() {
        return (
            <div></div>
        );
    }
}

export default ErrorComponent;