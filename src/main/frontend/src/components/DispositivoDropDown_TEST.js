import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function DispositivoDropDown_TEST() {

    /*

     + The Outro option in the Multiple choice, isn't a textfield that autoselects the CheckBox

     */

    const [selectedDispositivo, setSelectedDispositivo] = useState('');
    const [selectedEvent, setSelectedEvent] = useState('');
    const [selectedConditions, setSelectedConditions] = useState([]); // MultipleChoice
    const [otherInput, setOtherInput] = useState(''); // Other in multipleChoice

    const [other, setOther] = useState(''); //Normal Other
    const [showEventType, setShowEventType] = useState(false); // Initial state for eventType
    const [showOther, setShowOther] = useState(false); // Initial state for other
    const [showFenomenoMeteorologico, setShowFenomenoMeteorologico] = useState(false); // Initial state for fenomenoMeteorologico
    const [showEvolucaoEAE, setShowEvolucaoEAE] = useState(false); // Initial state for evolucaoEAE


    const handleDropdownChange_dispositivo = (event) => {
        let thisDispositivo = event.target.value;


        setSelectedDispositivo(thisDispositivo);
        setShowEventType(!(thisDispositivo === 'DECIR' || thisDispositivo === ''));
        setShowOther(!(thisDispositivo === 'DECIR' || thisDispositivo === '') && !(selectedEvent === 'MeteorologiaAdversa' || selectedEvent === ''));
        setShowFenomenoMeteorologico(!(thisDispositivo === 'DECIR' || thisDispositivo === '') && !(selectedEvent === 'Outro' || selectedEvent === ''));
        setShowEvolucaoEAE((!(thisDispositivo === '') && thisDispositivo === 'DECIR') || !(selectedEvent === 'Outro' || selectedEvent === ''));
    };

    const handleDropdownChange_event = (event) => {
        let thisEvent = event.target.value;
        setSelectedEvent(thisEvent);
        setShowOther(!(selectedDispositivo === 'DECIR' || selectedDispositivo === '') && !(thisEvent === 'MeteorologiaAdversa' || thisEvent === ''));
        setShowFenomenoMeteorologico(!(selectedDispositivo === 'DECIR' || selectedDispositivo === '') && !(thisEvent === 'Outro' || thisEvent === ''));
        setShowEvolucaoEAE((!(selectedDispositivo === '') && selectedDispositivo === 'DECIR') || !(thisEvent === 'Outro' || thisEvent === ''));
    };

    // MultipleChoice
    const handleConditionsChange = (event) => {
        const {value, checked} = event.target;
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
        let formData = {
            selectedDispositivo,
            selectedEvent
        };

        if (selectedEvent === 'MeteorologiaAdversa') {
            formData = {
                ...formData,
                selectedConditions
            }
        } else {
            formData = {
                ...formData,
                otherInput
            }
        }
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

            {showEventType && <div id="eventType">
                <Form.Group controlId="formEventType">
                    <Form.Label>Select an EventType</Form.Label>
                    <Form.Control as="select" onChange={handleDropdownChange_event}>
                        <option value="">Escolha uma Opção</option>
                        <option value="MeteorologiaAdversa">Meteorologia Adversa</option>
                        <option value="Outro">Outro</option>
                    </Form.Control>
                </Form.Group>
            </div>}

            {showOther && <div id="other">
                <Form.Group controlId="otherTextField">
                    <Form.Label>Other:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your input here"
                        value={otherInput} // Assuming you have a state for this
                        onChange={(e) => setOtherInput(e.target.value)}
                    />
                </Form.Group>
            </div>}

            {showFenomenoMeteorologico && <div id="fenomenoMeteorologico">
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
            </div>}

            {showEvolucaoEAE && <div id="evolucaoEAE">
                {/* Content for DIRACAERO or Especial */}
                evolucaoEAE
            </div>}

            <button type="submit">Submit</button>
        </Form>

    );
}

export default DispositivoDropDown_TEST;
