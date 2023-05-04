const ExpiryInput = React.createClass({
    displayName: 'ExpiryInput',


    render: function () {
        return (
            <input
                id={this.props.id}
                onKeyDown={this.correctInput}
                onKeyUp={this.validate}
                className={this.props.className}
                maxLength={this.state.maxLength}
                placeholder={this.props.placeholder}
                type="text"
            />
        );
    }
});

ReactDOM.render(
    <ExpiryInput id="expiry" className="form-control" delimiter="/" placeholder="mm/yy" />,
    document.getElementById('wrapper')
);