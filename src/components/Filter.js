import ExpenseBar from './ExpenseBar';
import YearSelector from './YearSelector';

const Filter = ({expensesToShow, handleFilterChange}) => {
    // console.log(expensesToShow[0]);
    const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    const monthlyExpenses = months.map((month, id) => {
        return expensesToShow.reduce(
            (accum, cur) => accum + (Number(cur.date.slice(5, 7)) === (id + 1)? Number(cur.ammount) : 0),
            0
            )
        })
        
    const tol = expensesToShow.reduce(
        (accum, cur) => Number(accum) + Number(cur.ammount),
        0
    )

    const Styles = monthlyExpenses.map(month => {return {height: `${Math.round(Number(month) / tol * 100)}%`}})

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '4px'
                }}>
                <div
                    style={{
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                >Filter</div>
                <YearSelector handleFilterChange={handleFilterChange}></YearSelector>
            </div>
            <div className="summary">
                {months.map((month, id) => (
                    <ExpenseBar key={month} month={month} Style={Styles[id]}></ExpenseBar>
                ))}
            </div>
        </div>
    )
}

export default Filter