import Date from './Date.js';
import Ammount from './Ammount';
import RemoveBtn from './RemoveBtn';

const Expense = ({
    name,
    ammount,
    date,
    handleDelete
}) => {
    return (
        <div
        style={{
            position: 'relative',
            width: '100%',
            height: '6.5em',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'gray',
            color: 'white',
            borderRadius: '8px',
            margin: '4px 0px',
            padding: '8px'
        }}>
            <Date date={date}></Date>
            <div
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <h3>{name}</h3>
                <Ammount ammount={ammount}></Ammount>
            </div>
            <RemoveBtn handleDelete={handleDelete}></RemoveBtn>
        </div>
    )
}

export default Expense