import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function DispositivoDropDown() {

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedConditions, setSelectedConditions] = useState([]); // MultipleChoice
    const [otherInput, setOtherInput] = useState(''); // Other in multipleChoice
    const [other, setOther] = useState(''); //Normal Other

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // MultipleChoice
    const handleConditionsChange = (event) => {
        const { options } = event.target;
        const selectedConditions = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setSelectedConditions(selectedConditions);
    };

    //Other in MultipleChoice
    const handleOtherInputChange = (event) => {
        const { value } = event.target;
        setOtherInput(value);
        // Automatically select the "Other" option when input is provided
        if (value.trim() !== '' && !selectedConditions.includes('Other')) {
            setSelectedConditions([...selectedConditions, 'Other']);
        } else if (value.trim() === '' && selectedConditions.includes('Other')) {
            setSelectedConditions(selectedConditions.filter(condition => condition !== 'Other'));
        }
    };

    //save stuff on submit
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        const formData = {
            selectedOption,
            selectedConditions
        };
        console.log(formData); // Example: You can send this data to an API or save it to the state
    };

    return (
        <Form id="form_Page1" onSubmit={handleSubmit}>
            <div>JohnDoe</div>
            <Form.Group controlId="formDispositivo">
                <Form.Label>Select an option</Form.Label>
                <Form.Control as="select" onChange={handleDropdownChange}>
                    <option value="DIOPS">DIOPS</option>
                    <option value="DECIR">DECIR</option>
                    <option value="DIONRBQ">DIONRBQ</option>
                    <option value="DIRACAERO">DIRACAERO</option>
                    <option value="Especial">Especial</option>
                </Form.Control>
            </Form.Group>

            <div id="eventType" className={selectedOption === 'DECIR' ? 'd-block' : 'd-none'}>
                <Form.Group controlId="formEventType">
                    <Form.Label>Select an EventType</Form.Label>
                    <Form.Control as="select" onChange={handleDropdownChange}>
                        <option value="MeteorologiaAdversa">Meteorologia Adversa</option>
                        <option value="Outro">Outro</option>
                    </Form.Control>
                </Form.Group>
            </div>

            <div id="other" className={selectedOption === 'DECIR' || selectedOption === 'MeteorologiaAdversa' ? 'd-block' : 'd-none'}>
                <Form.Group controlId="otherTextField">
                    <Form.Label>Other:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your input here"
                        value={otherInput} // Assuming you have a state for this
                    />
                </Form.Group>
            </div>

            <div id="fenomenoMeteorologico" className={selectedOption === 'DECIR' || selectedOption === 'Outro'? 'd-block' : 'd-none'}>
                <Form.Group controlId="formConditions">
                    <Form.Label>Select meteorological conditions</Form.Label>
                    <Form.Control as="select" multiple onChange={handleConditionsChange}>
                        <option value="Chuva">Chuva</option>
                        <option value="Neve">Neve</option>
                        <option value="Granizo">Granizo</option>
                        <option value="Vento">Vento</option>
                        <option value="Frio">Frio</option>
                        <option value="Calor">Calor</option>
                        <option value="Nevoeiro">Nevoeiro</option>
                        <option value="Trovoada">Trovoada</option>
                        <option value="Agitação Marítima">Agitação Marítima</option>
                        <option value="Other">Outro</option>
                    </Form.Control>
                    {selectedConditions.includes('Other') && (
                        <Form.Control
                            type="text"
                            placeholder="Outro"
                            value={otherInput}
                            onChange={handleOtherInputChange}
                        />
                    )}
                </Form.Group>
            </div>

            <div id="evolucaoEAE" className={selectedOption === 'Outro' ? 'd-block' : 'd-none'}>
                {/* Content for DIRACAERO or Especial */}/*
            </div>


            <button type="submit">Submit</button>
        </Form>

    );
}

export default DispositivoDropDown;
