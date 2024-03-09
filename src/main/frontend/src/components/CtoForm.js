import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DispositivoDropDown_TEST from './DispositivoDropDown_TEST';
import AlertaLevel_TEST from './AlertaLevel_TEST';

function CtoForm() {
    const [page, setPage] = useState('0');

    const handlePage = (newPage) => {
        setPage(newPage);
    };

    return (
        <Form id="form_AlertaLevels">
            { page === '0' &&
                <DispositivoDropDown_TEST page={page} onPageChange={handlePage} />
            }
            {page === '1' &&
                <AlertaLevel_TEST page={page} onPageChange={handlePage}/>
            }
            {console.log("CtoForm rendered")}
        </Form>
    );
}

export default CtoForm;
