import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ReactLoading from 'react-loading'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import {FaCheck} from 'react-icons/fa'

import './pay.css'
import buy from '../../utils/buy'

import mtn from './assets/mtn.jpg'
import orange from './assets/orange.jpg'

function Pay() {
    //const [state, setState] = useState({initialState})
    const [step, setStep] = useState(0)
    const [trace, setTrace] = useState({status: false, error: null, traceStep: 0, backFund: true})
    let history=useHistory()
    useEffect(() => {
        let data=JSON.parse(sessionStorage.getItem('data'))
        console.log(history)
        data ? buy(data, changeStep, cancel) : history.goBack()
        sessionStorage.clear()
    }, [])

    const changeStep=(indice)=>{
        console.log("change step")
        setStep(indice)
    }
    const start=()=>console.log("ca commence")
    const cancel=(data, i)=>{
        console.log("echec de l'operation")
        let witness= i>1
        setTrace({status: true, error: data, traceStep: i, backFund: witness})
    }
    const setIcon=(i, num)=>{
        if(i<num) return null
        else if(i==num) return <ReactLoading type="spinningBubbles" color='#000' height={30} width={30} />
        else return <FaCheck size={30} color="#05e8a5" />
    }
    const backFunds=()=>console.log(" renvoi des fonds ")
    console.log('step :>> ', step)

    return trace.status ? ( 
        <div className="error">
            <h2>echec de l'operation</h2>
            <h3>{trace.error.cause}</h3>
            <p>l'operation n'a pas pu se terminer</p>
            <p>
                {trace.backFund ? backFunds() : (null)}
                {trace.backFund && <h3>renvoie du payment &ensp; <ReactLoading type="spinningBubbles" color='#000' height={20} width={20} /> </h3> }
            </p>
            { console.log(trace) }
        </div>
    ): (
        <div>
            <div className="modal-head">
                <h2>transaction en cours </h2>
                <ReactLoading type="spinningBubbles" color='#000' height={50} width={50} />
            </div>
            <div className="content-modal">
                <Stepper orientation='vertical' activeStep={step}>
                    <Step>
                        <StepLabel><h2>preparation des fonds {setIcon(step, 0)} </h2></StepLabel>
                        <StepContent>
                            <div className="">
                                &raquo; verification de la presence de fonds 
                            </div> <br/>
                            <div className="">
                                &raquo; verification de la validite du wallet
                            </div>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel><h2>reception du payment mobile {setIcon(step, 1)} </h2></StepLabel>
                        <StepContent>
                            <h3>verifiez la demande de debit sur votre telephone</h3>
                            <div className="phone-step">
                                <div className="phone-mtn">
                                    <h4>MTN</h4>
                                    <img className="phone-image" alt="" srcset={mtn} />
                                </div>
                                <div className="phone-orange">
                                    <h4>ORANGE</h4>
                                    <img className="phone-image" alt="" srcset={orange} />
                                </div>
                            </div>
                            <h3> si rien n'apparait saisissez le code d'acces au menu MOMO ou OM </h3>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel><h2> preparation de la transaction {setIcon(step, 2)} </h2></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel><h2> envoie des fonds {setIcon(step, 3)} </h2></StepLabel>
                    </Step>
                </Stepper>
            </div>
        </div>
    )
}

export default Pay
