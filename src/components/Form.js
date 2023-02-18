import FormCancelBtn from "./FormCancelBtn"
import FormInput from "./FormInput"
import FormSubmitBtn from "./FormSubmitBtn"

const Form = ({
    isAdding, 
    handleAddClick, 
    newName,
    newAmmount,
    newDate,
    handleNameChange, 
    handleAmmountChange, 
    handleDateChange,
    addExpense}) => {
    if (isAdding) {
        return (
            <div className="form-container">
                <FormInput
                    type='Name'
                    value={newName}
                    handleChange={handleNameChange}></FormInput>
                <FormInput
                    type='Ammount'
                    value={newAmmount}
                    handleChange={handleAmmountChange}></FormInput>
                <div>
                    Date
                    <input
                        type={'date'}
                        value={newDate}
                        onChange={(e) => handleDateChange(e)}
                        placeholder='dd/mm/yyyy'>
                    </input>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'end',
                        gap: '16px'
                    }}>
                    <FormSubmitBtn addExpense={addExpense}></FormSubmitBtn>
                    <FormCancelBtn handleAddClick={handleAddClick}></FormCancelBtn>
                </div>
            </div>
        )
    } else {
        return (
            <div 
                style={{
                    width: '40%',
                    backgroundColor: '#897bda',
                    margin: '16px',
                    padding: '16px',
                    borderRadius: '8px'
                }}>
                <button
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        backgroundColor: '#862796',
                        border: 'none',
                        padding: '8px',
                        borderRadius: '8px',
                        boxShadow: '0px 3px 2px #776abd'
                    }}
                    onClick={handleAddClick}>Add new exspense</button>
            </div>
        )
    }
}

export default Form