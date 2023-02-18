const FormCancelBtn = ({
    handleAddClick
}) => (
    <button
        type="submit" 
        style={{
            borderRadius: '8px',
            backgroundColor: '#d0d0d0',
            color: '#303030',
            border: 'none',
            fontWeight: 'bold',
            padding: '6px 12px',
            boxShadow: '0px 2px 2px black'
    }}
    onClick={handleAddClick}>Cancel</button>
)

export default FormCancelBtn