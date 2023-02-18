const ExpenseBar = ({
    month,
    Style
}) => {
    return (
        <div className="bar-wrapper">
            <div className="bar-container">
                <div className="bar"
                style={Style}
                ></div>
            </div>
            <div style={{
                fontSize: 'small'
            }}>{month}</div>
        </div>
    )
}

export default ExpenseBar