import React, { useState } from 'react'
import Navbar from '../landing/components/Navbar'
import Card from './components/card/Card'
import Input from './components/input/Input'
import Title from './components/title/Title'
import './Create.css'

const Create = () => {
    const [active, setActive] = useState('question');

    const createQuestion = {

    }

    return (
        <>
            <Navbar>
                <div className='nav__create'>
                    <div className={`create__question ${active == 'question' && 'active'}`}
                        onClick={()=>{setActive('question')}}>
                            Question
                    </div>
                    <div className={`create__response ${active== 'response' && 'active'} `}
                        onClick={()=>{setActive('response')}}>
                            Reponses
                    </div>
                </div>
            </Navbar>
            <div className='create__content'>
                <Card>
                    <Title title='Evaluation de prof' description='Obligatoire pour tous les étudiants'/>
                </Card>
                <Card>
                    <Input label='Avez vous aimer le cours ?'/>
                </Card>
            </div>
        </>
    )
}

export default Create
