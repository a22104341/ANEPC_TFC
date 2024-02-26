import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function DispositivoDropDown_TEST() {

    /* A way of making the items you don't want to start off by being invisible, would be by putting: selectedDispositivo === ''
    -> this makes part of the other conditions not work anymore, because max. conditions with the correct order is 2.

     Order needs to be maintained, because IF 1st one is false, check 2nd one ELSE run first without checking 2nd.
     BUT IF 2nd also false, ignore 3rd :D

     Need to find a way, to start them all as being invisible on render (except the one i want) */

    const [selectedDispositivo, setSelectedDispositivo] = useState('');
    const [selectedEvent, setSelectedEvent] = useState('');
    const [selectedConditions, setSelectedConditions] = useState([]); // MultipleChoice
    const [otherInput, setOtherInput] = useState(''); // Other in multipleChoice
    const [other, setOther] = useState(''); //Normal Other

    const handleDropdownChange_dispositivo = (event) => {
        setSelectedDispositivo(event.target.value);
        /* This is a way of fixing the evolucaoEAE disappearing "DIOPS->Outro->DECIR" but when you go "->DIOPS" after this, the event still says Outro*/
        //setSelectedEvent('MeteorologiaAdversa');
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

            <div id="eventType" className={selectedDispositivo === 'DECIR' ? 'd-none' : 'd-block'}>
                <Form.Group controlId="formEventType">
                    <Form.Label>Select an EventType</Form.Label>
                    <Form.Control as="select" onChange={handleDropdownChange_event}>
                        <option value="">Escolha uma Opção</option>
                        <option value="MeteorologiaAdversa">Meteorologia Adversa</option>
                        <option value="Outro">Outro</option>
                    </Form.Control>
                </Form.Group>
            </div>

            <div id="other" className={selectedDispositivo === 'DECIR' || selectedEvent === 'MeteorologiaAdversa' ? 'd-none' : 'd-block'}>
                <Form.Group controlId="otherTextField">
                    <Form.Label>Other:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your input here"
                        value={otherInput} // Assuming you have a state for this
                    />
                </Form.Group>
            </div>

            <div id="fenomenoMeteorologico" className={selectedDispositivo === 'DECIR' || selectedEvent === 'Outro' ? 'd-none' : 'd-block'}>
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

            <div id="evolucaoEAE" className={selectedEvent === 'Outro' ? 'd-none' : 'd-block'}>
                {/* Content for DIRACAERO or Especial */}
                evolucaoEAE
            </div>


            <button type="submit">Submit</button>
        </Form>

    );
}

export default DispositivoDropDown_TEST;
