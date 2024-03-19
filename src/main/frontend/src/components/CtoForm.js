import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DispositivoDropDown_TEST from './DispositivoDropDown_TEST';
import AlertaLevel_TEST from './AlertaLevel_TEST';

import DispositivoDropDown from './DispositivoDropDown';
import AlertaLevel from './AlertaLevel';

function CtoForm() {
    const [page, setPage] = useState('0');

    const handleClick = (event) => {
        setPage(event);
    }

    return (
        <Form id="form_AlertaLevels">
            { page === '0' &&
                <DispositivoDropDown_TEST page={page} handleClick={handleClick} />
            }
            { page === '1' &&
                <AlertaLevel_TEST page={page} handleClick={handleClick}/>
            }
            {/*<button type="submit" onSubmit={handleSubmit}>Submit</button> */}
            {console.log("CtoForm rendered")}
        </Form>
    );
}

export default CtoForm;
