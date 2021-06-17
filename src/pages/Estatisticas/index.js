import React, { useEffect, useState } from 'react';
import api from '../../services';
import GlobalMenu from '../../components/GlobalMenu';


const Estatisticas = () => {

    const [dados, setDados] = useState([])

    const getData = async () => {
        try {
                const resposta = await api.get('/statistics', {
                    headers: {
                        'x-rapidapi-key': 'ad54e25248msh186c10aa129d47ep13f44fjsn0abcfc375032',
                        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
                      }
                });
            setDados(resposta.data.response)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <>
        <GlobalMenu />
    <div>
        <h1> Estatisticas do Covid-19 </h1>
        {
            dados.map((item, index) => {
                return(
                    <div key={index}>
                        <table>
                                 País: {item.country}
                                 Total de habitantes: {item.population}
                                 Total de testes: {item.tests.total}
                                 Total de casos: {item.cases.total}
                                 Total de mortes: {item.deaths.total}
                        </table>
                    </div>
                );
            })
        }
    </div>
    </>
    )}


export default Estatisticas;