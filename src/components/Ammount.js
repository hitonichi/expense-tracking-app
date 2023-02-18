const Ammount = ({ammount}) => (
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            backgroundColor: '#862796',
            border: '1px solid white',
            borderRadius: '8px',
            padding: '4px',
            textAlign: 'center'
        }}>$ {ammount}</div>
)

export default Ammount