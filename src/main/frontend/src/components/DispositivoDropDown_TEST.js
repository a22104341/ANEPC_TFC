import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function DispositivoDropDown_TEST() {

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
        <div>JohnDoe</div>
    );
}

export default DispositivoDropDown_TEST;
