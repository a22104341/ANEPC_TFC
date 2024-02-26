import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function DispositivoDropDown_TEST() {
    //WARNING id="fenomenoMeteorologico" AND id="other":The order of Outro/MeteorologiaAdversa and DECIR are IMPORTANT, if u change the order it stops working :D -> IF the 1st one is YES it skips the 2nd condition, ELSE it reads the second condition
    //If you want to DeJANK-ify it, you can create another variable for the id="other" field and use it instead :D
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedConditions, setSelectedConditions] = useState([]); // MultipleChoice
    const [otherInput, setOtherInput] = useState(''); // Other in multipleChoice
    const [other, setOther] = useState(''); //Normal Other

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
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
            selectedOption,
            selectedConditions
        };
        console.log(formData); // Example: You can send this data to an API or save it to the state
    };

    return (
        <Form id="form_Page1" onSubmit={handleSubmit}>
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

            <div id="eventType" className={selectedOption !== 'DECIR' ? 'd-block' : 'd-none'}>
                <Form.Group controlId="formEventType">
                    <Form.Label>Select an EventType</Form.Label>
                    <Form.Control as="select" onChange={handleDropdownChange}>
                        <option value="MeteorologiaAdversa">Meteorologia Adversa</option>
                        <option value="Outro">Outro</option>
                    </Form.Control>
                </Form.Group>
            </div>

            <div id="other" className={selectedOption === 'MeteorologiaAdversa' || selectedOption === 'DECIR' ? 'd-none' : 'd-block'}>
                <Form.Group controlId="otherTextField">
                    <Form.Label>Other:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your input here"
                        value={otherInput} // Assuming you have a state for this
                    />
                </Form.Group>
            </div>

            <div id="fenomenoMeteorologico" className={selectedOption === 'Outro' || selectedOption === 'DECIR' ? 'd-none' : 'd-block'}>
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

            <div id="evolucaoEAE" className={selectedOption !== 'Outro' ? 'd-block' : 'd-none'}>
                {/* Content for DIRACAERO or Especial */}
                evolucaoEAE
            </div>


            <button type="submit">Submit</button>
        </Form>

    );
}

export default DispositivoDropDown_TEST;
