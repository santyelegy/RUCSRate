import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('custom buttom'),
    );

    return (
        <button
            onClick={decoratedOnClick}
            style={{
                backgroundColor: '#0d6efd',
                color: 'white',
                borderColor: '#0d6efd',
                color: '#fff',
                borderRadius: '5px'
            }}
        >
            {children}
        </button>
    );
}

export default CustomToggle;