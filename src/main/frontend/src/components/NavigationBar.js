import React from 'react'

function NavigationBar(page) {
    return (
        <div id="navBar">
            <div id="navigationBarTOP">
                <p><a href="/criar_cto">Criar CTO</a></p>
                <p><a href="/ctos">CTOs</a></p>
                <p><a href="/estatisticas">Consultar Estatísticas</a></p>
            </div>
            <div id="navigationBarBOT">
                <p>{page}</p>
                <p><a href="/login">Logout</a></p>
            </div>
        </div>
    );
}

export default NavigationBar;