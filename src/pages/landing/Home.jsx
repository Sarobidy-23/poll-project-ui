import React, { useState } from 'react'
import Card from '../../components/card/Card'
import Input from '../create/components/input/Input'
import Navbar from './components/Navbar'
import './Home.css'
import Modal from '../create/components/modal/Modal'
import Button from '../../components/button/Button'
import { useDataProvider } from '../../context/ApiContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const {client, idUser} = useDataProvider();
    const [create, setCreate] = useState(false);
    const createForm = {
        "idPoll": 0,
        "title": "",
        "idOwner": "",
    }
    const getTitle = (value) =>{
        createForm.title = value
    }
    const handleCreate = () => {
        setCreate(!create)
    }
    const postFrom = () =>{
        client.post(`/polls/${idUser}`).then(()=>{
            navigate('/create')
        })
    }

    return (
        <>
            <Navbar>
                <div className='search__container'>
                    <input id='search' type='text'
                        placeholder='recherche' 
                        className='navbar__search' />
                    <i className='fa fa-search search__icon' />
                </div>
            </Navbar>
            <Modal title='Nouveau formuaire'
                isActive={create} handleModal={handleCreate}>
                    <Input placeholder='titre'
                        collect={getTitle}/>
                    <Input placeholder='Description'/>
                    <Button title='Créer le formulaire' onClickButton={createForm}/>
            </Modal>
            <div className='home__creation'>
                <div className='creation__title'>
                    Référence formulaire
                </div>
                <div className='content__container'>
                    <span id='new__form'  onClick={()=>{handleCreate()}}>
                        <i className='fa fa-plus ' />
                    </span>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Home
