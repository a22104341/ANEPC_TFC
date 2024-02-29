import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function DispositivoDropDown() {

    /*

     +The Outro box, in the Multiple Choice, doesn't autoselect itself when length of text inside > 0

     */

    const [selectedDispositivo, setSelectedDispositivo] = useState('');
    const [selectedEvent, setSelectedEvent] = useState('');
    const [otherInput, setOtherInput] = useState(''); // Other in multipleChoice
    const [selectedConditions, setSelectedConditions] = useState([]); // MultipleChoice
    const [selectedEAE, setselectedEAE] = useState([]); // EAE

    const [multiOtherInput, setMultiOtherInput] = useState('');
    const [isOtherChecked, setIsOtherChecked] = useState(false);

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

        // Reset selected event, depending on choices in dispositivo
        if (thisDispositivo === 'DECIR' || thisDispositivo === ''){
            setSelectedEvent('');
        }
        // Hide evolucaoEAE depending on choices
        setShowEvolucaoEAE((thisDispositivo === 'DECIR') || (thisDispositivo !== '' && !(selectedEvent === 'Outro' || selectedEvent === '')));
    };

    const handleDropdownChange_event = (event) => {
        let thisEvent = event.target.value;
        setSelectedEvent(thisEvent);

        setShowOther(!(thisEvent === 'MeteorologiaAdversa' || thisEvent === ''));
        setShowFenomenoMeteorologico(!(thisEvent === 'Outro' || thisEvent === ''));
        setShowEvolucaoEAE(!(thisEvent === 'Outro' || thisEvent === ''));
    };

    // MultipleChoice
    const handleConditionsChange = (event) => {
        const { value, checked, id } = event.target;
        if (id === 'condition-9') { // ID of the "Other" checkbox
            setIsOtherChecked(checked);
            if (!checked) {
                setSelectedConditions(prevSelected => prevSelected.filter(condition => condition !== value));
            }
        } else {
            if (checked) {
                setSelectedConditions(prevSelected => [...prevSelected, value]);
            } else {
                setSelectedConditions(prevSelected => prevSelected.filter(condition => condition !== value));
            }
        }
    };

    const handleEAEChange = (event) => {
        const {value, checked} = event.target;
        if (checked) {
            setselectedEAE(prevSelected => [...prevSelected, value]);
        } else {
            setselectedEAE(prevSelected => prevSelected.filter(selectedEAE => selectedEAE !== value));
        }
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
                //Check if Other was checked and save its input into the array
                selectedConditions: isOtherChecked ? [...selectedConditions, multiOtherInput] : selectedConditions,
                selectedEAE
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

            {showFenomenoMeteorologico && (
                <div id="fenomenoMeteorologico">
                    <Form.Group controlId="formConditions">
                        <Form.Label>Select meteorological conditions</Form.Label>
                        {['Chuva', 'Neve', 'Granizo', 'Vento', 'Frio', 'Calor', 'Nevoeiro', 'Trovoada', 'Agitação Marítima', 'Other'].map((condition, index) => (
                            <Form.Check
                                key={index}
                                type="checkbox"
                                id={`condition-${index}`}
                                label={condition === 'Other' ? (
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Outro"
                                            value={multiOtherInput}
                                            onChange={(e) => setMultiOtherInput(e.target.value)}
                                        />
                                    </div>
                                ) : condition}
                                value={condition}
                                onChange={handleConditionsChange}
                                checked={condition === 'Other' ? isOtherChecked : selectedConditions.includes(condition)}
                            />
                        ))}
                    </Form.Group>
                </div>
            )}


            {showEvolucaoEAE && <div id="evolucaoEAE">
                <Form.Group controlId="formConditions">
                    <Form.Label>Select evolucao EAE</Form.Label>
                    {['Agravamento', 'Manutenção', 'Desagravamento'].map((eae, index) => (
                        <Form.Check
                            key={index}
                            type="checkbox"
                            id={`eae-${index}`}
                            label={eae}
                            value={eae}
                            onChange={handleEAEChange}
                            checked={selectedEAE.includes(eae)}
                        />
                    ))}
                </Form.Group>
            </div>}

            <button type="submit">Next Page</button>
            {console.log("CTO Form loaded")}
        </Form>

    );
}

export default DispositivoDropDown;
