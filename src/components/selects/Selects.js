import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/borabora.jpg'

import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'

import Desert from '../../assets/images/img-8.jpg'
import Monkeyfalls from '../../assets/images/img-9.jpg'
import Nilgiri from '../../assets/images/img-home.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='Seahorse Reef' />
                <SelectsImg bgImg={Desert} text='Desert' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
                <SelectsImg bgImg={Monkeyfalls} text='Monkey Falls' />
                <SelectsImg bgImg={Maldives3} text='Barbados' />
                <SelectsImg bgImg={Nilgiri} text='Nilgiri' />
            </div>

        </div>
    )
}

export default Selects
