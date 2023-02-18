const FormSubmitBtn = ({
    addExpense
}) => (
    <button
    type="submit"
    onClick={(e) => addExpense(e)}
    style={{
        borderRadius: '8px',
        color: 'white',
        backgroundColor: '#8c319b',
        border: 'none',
        fontWeight: 'bold',
        padding: '6px 12px',
        boxShadow: '0px 2px 2px black'
    }}>Add</button>
)

export default FormSubmitBtn