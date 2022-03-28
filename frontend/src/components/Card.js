
import React from 'react';
import { Avatar } from 'primereact/avatar';

import _ from '../assets/img/hero-1.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div> 
             <Avatar image={_} size="large" shape="circle" />
        </div>
    )
}
                 