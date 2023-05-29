import React, { useState } from 'react';
import "./App.css";
import Axios from 'axios';
import QrReader from "react-web-qr-reader";


export default function Inserimento(){

  const delay = 100;

  const previewStyle = {
    height:400,
    width: 400
  };

    const [nomeBene, setNomeBene] = useState("nome bene");
    const [data, setData] = useState("data");
    const [luogo, setluogo] = useState("luogo");
    const [nomeSchedatore, setNomeSchedatore] = useState("nome schedatore");
    const [nomeResp, setNomeResp] = useState("nome responsabile");
    const [tipoOpera, setTipoOpera] = useState("nome schedatore");
    const [descrizione, setDescrizione] = useState("descrizione");
    const [materiale, setMateriale] = useState("materiale");
    const [altezza, setAltezza] = useState("altezza");
    const [larghezza, setLarghezza] = useState("larghezza");
    const [profondità, setProfondita] = useState("profondità"); 
    const [note, setNote] = useState("note");


    const handleScan = async(result)=>{
        if(result)
        {
          await Axios.get('https://protezione-civile-server.onrender.com/letturaBeni').then(
            (res)=>{
              setNomeBene(res.data[result.data]["nomeBene"]);
              setData(res.data[result.data]["data"]);
              setluogo(res.data[result.data]["luogo"]);
              setNomeSchedatore(res.data[result.data]["nomeSchedatore"]);
              setNomeResp(res.data[result.data]["nomeResp"]);
              setTipoOpera(res.data[result.data]["tipoOpera"]);
              setDescrizione(res.data[result.data]["descrizione"]);
              setMateriale(res.data[result.data]["materiale"]);
              setAltezza(res.data[result.data]["altezza"]);
              setLarghezza(res.data[result.data]["larghezza"]);
              setProfondita(res.data[result.data]["profondità"]);
              setNote(res.data[result.data]["note"]);
            }
          )
            .catch(function (error) {
              console.log(result);
            });
          }
    }

    return(    
        <div className='body'>

            <div className="title">SCHEDATURA BENE</div>

            <div className="inputs">
                
                <div className="res" id='nomeBene'>{nomeBene}</div>
                <div className="res">{data}</div>
                <div className="res">{luogo}</div>
                <div className="res">{nomeSchedatore}</div>
                <div className="res">{nomeResp}</div>
                <div className="res">{tipoOpera}</div>
                <div className="res">{descrizione}</div>
                <div className="res">{materiale}</div>
                <div className="res">{altezza}</div>
                <div className="res">{larghezza}</div>
                <div className="res">{profondità}</div>
                <div className="res" id='note'>{note}</div>

            </div>

            <div className="qr">

            <QrReader delay={delay} style={previewStyle} onError={()=>console.log("error")} onScan={handleScan}/>

            </div>
        </div>
    );
}