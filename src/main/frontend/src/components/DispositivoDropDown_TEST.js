import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function DispositivoDropDown_TEST() {
    const [selectedDispositivo, setSelectedDispositivo] = useState('');
    const [selectedEvent, setSelectedEvent] = useState('');
    const [selectedConditions, setSelectedConditions] = useState([]); // MultipleChoice
    const [otherInput, setOtherInput] = useState(''); // Other in multipleChoice
    const [other, setOther] = useState(''); //Normal Other

    const handleDropdownChange_dispositivo = (event) => {
        setSelectedDispositivo(event.target.value);
        /* This is a way of fixing the evolucaoEAE disappearing "DIOPS->Outro->DECIR" but when you go "->DIOPS" after this, the event still says Outro*/
        setSelectedEvent('MeteorologiaAdversa');
    };

    const handleDropdownChange_event = (event) => {
        setSelectedEvent(event.target.value);
    };

    // MultipleChoice
    const handleConditionsChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedConditions(prevSelected => [...prevSelected, value]);
        } else {
            setSelectedConditions(prevSelected => prevSelected.filter(condition => condition !== value));
        }
    };

    //Other in MultipleChoice
    const handleOtherInputChange = (event) => {

    };

    //save stuff on submit
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        const formData = {
            selectedDispositivo,
            selectedEvent,
            selectedConditions
        };
        console.log(formData); // Example: You can send this data to an API or save it to the state
    };

    return (
        <Form id="form_Page1" onSubmit={handleSubmit}>
            <Form.Group controlId="formDispositivo">
                <Form.Label>Select an option</Form.Label>
                <Form.Control as="select" onChange={handleDropdownChange_dispositivo}>
                    <option value="">Escolha uma Opção</option>
                    <option value="DIOPS">DIOPS</option>
                    <option value="DECIR">DECIR</option>
                    <option value="DIONRBQ">DIONRBQ</option>
                    <option value="DIRACAERO">DIRACAERO</option>
                    <option value="Especial">Especial</option>
                </Form.Control>
            </Form.Group>

            <div id="eventType" className={selectedDispositivo !== 'DECIR' ? 'd-block' : 'd-none'}>
                <Form.Group controlId="formEventType">
                    <Form.Label>Select an EventType</Form.Label>
                    <Form.Control as="select" onChange={handleDropdownChange_event}>
                        <option value="">Escolha uma Opção</option>
                        <option value="MeteorologiaAdversa">Meteorologia Adversa</option>
                        <option value="Outro">Outro</option>
                    </Form.Control>
                </Form.Group>
            </div>

            <div id="other" className={selectedEvent === 'MeteorologiaAdversa' || selectedDispositivo === 'DECIR' ? 'd-none' : 'd-block'}>
                <Form.Group controlId="otherTextField">
                    <Form.Label>Other:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your input here"
                        value={otherInput} // Assuming you have a state for this
                    />
                </Form.Group>
            </div>

            <div id="fenomenoMeteorologico" className={selectedEvent === 'Outro' || selectedDispositivo === 'DECIR' ? 'd-none' : 'd-block'}>
                <Form.Group controlId="formConditions">
                    <Form.Label>Select meteorological conditions</Form.Label>
                    {['Chuva', 'Neve', 'Granizo', 'Vento', 'Frio', 'Calor', 'Nevoeiro', 'Trovoada', 'Agitação Marítima', 'Other'].map((condition, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            id={`condition-${index}`}
                            label={condition}
                            value={condition}
                            onChange={handleConditionsChange}
                            checked={selectedConditions.includes(condition)}
                        />
                    ))}
                </Form.Group>
            </div>

            <div id="evolucaoEAE" className={selectedEvent !== 'Outro' ? 'd-block' : 'd-none'}>
                {/* Content for DIRACAERO or Especial */}
                evolucaoEAE
            </div>


            <button type="submit">Submit</button>
        </Form>

    );
}

export default DispositivoDropDown_TEST;
