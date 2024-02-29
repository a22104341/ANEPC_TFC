import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function AlertaLevel() {
    const [selectedOptions, setselectedOptions] = useState({});

    const [tableNames] = useState(['Comando Nacional', 'Comando Regional Norte', 'Comando Regional Centro', 'Comando Regional Lisboa e Vale do Tejo', 'Comando Regional Alentejo', 'Comando Regional Algarve']);
    const columns = ['Verde', 'Azul', 'Amarelo', 'Laranja', 'Vermelho'];
    const tableData = [
        { lines: ['CNEPC'] },
        { lines: ['CREPC Norte', 'CSREPC AM Porto (Porto)', 'CSREPC Alto Minho (V. Castelo)', 'CSREPC Alto Tâmega', 'CSREPC Ave', 'CSREPC Cávado (Braga)', 'CSREPC Douro (Vila Real)', 'CSREPC Tâmega e Sousa', 'CSREPC Trás-os-Montes (Bragança)'] },
        { lines: ['CREPC Centro', 'CSREPC Beira Baixa (C. Branco)', 'CSREPC Beiras e Serra da Estrela (Guarda)', 'CSREPC Viseu, Dão e Lafões (Viseu)', 'CSREPC Região de Aveiro (Aveiro)', 'CSREPC Região de Coimbra (Coimbra)', 'CSREPC Região de Leiria (Leiria)'] },
        { lines: ['CREPC LVT', 'CSREPC Grande Lisboa (Lisboa)', 'CSREPC Lezíria do Tejo (Santarém)', 'CSREPC Médio Tejo', 'CSREPC Oeste', 'CSREPC Península de Setúbal (Setúbal)'] },
        { lines: ['CREPC Alentejo', 'CSREPC Alentejo Central (Évora)', 'CSREPC Alentejo Litoral', 'CSREPC Alto Alentejo (Portalegre)', 'CSREPC Baixo Alentejo (Beja)'] },
        { lines: ['CREPC Algarve', 'CSREPC Algarve'] }
        // Add more table data as needed
    ];


    const handleOptionChange = (event, tableName, lineName, columnName) => {
        const { value } = event.target;
        setselectedOptions(prevState => ({
            ...prevState,
            [tableName]: {
                ...prevState[tableName],
                [lineName]: {
                    [columnName]: value
                }
            }
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Selected Options:", selectedOptions); // Log selected options
        // Perform any further actions here, like saving to the state or sending to the server
    };


    const generateForm = (tableNames, tableData, columns) => {
        return tableNames.map((tableName, index) => {
            const lines = tableData[index].lines.map((lineName, lineIndex) => {
                const lineColumns = columns.map((columnName, columnIndex) => (
                    <div key={columnName} className="col">
                        {columnIndex === 0 && <div>{lineName}</div>}
                        <Form.Check
                            type="radio"
                            name={`${tableName}-${lineName}`}
                            value={columnName}
                            checked={selectedOptions[tableName]?.[lineName]?.[columnName] === columnName}
                            onChange={(e) => handleOptionChange(e, tableName, lineName, columnName)}
                        />
                    </div>
                ));
                return (
                    <div key={String(lineName)} className="row">
                        {lineColumns}
                    </div>
                );
            });
            const columnHeaders = (
                <div className="row">
                    {columns.map(columnName => (
                        <div key={columnName} className="col">
                            <div>{columnName}</div>
                        </div>
                    ))}
                </div>
            );
            return (
                <div key={tableName}>
                    <h3>{tableName}</h3>
                    <div className="table">
                        {columnHeaders}
                        {lines}
                    </div>
                </div>
            );
        });
    };

    return (
        <Form id="form_Page1" onSubmit={handleSubmit}>
            {generateForm(tableNames, tableData, columns)}
            <button type="submit">Next Page</button>
        </Form>
    );
}

export default AlertaLevel;
