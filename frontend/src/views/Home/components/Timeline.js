
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import '../../../styles/TimelineDemo.css';

import system from '../../../assets/img/system.jpg'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const events = [
        { status: 'Gram-Schmidt QR Decomposition Process', icon: 'pi pi-globe', color: '#9C27B0', image: system, text: 'The QR decomposition (also called the QR factorization) of a matrix is a decomposition of the matrix into an orthogonal matrix and a triangular matrix.' },
        { status: 'Explication', icon: 'pi pi-cog', color: '#673AB7', text: 'A QR decomposition of a real square matrix A is a decomposition of A as: A = Q X R.where Q is an orthogonal matrix (i.e. QTQ = I) and R is an upper triangular matrix. If A is nonsingular, then this factorization is unique.' },
        { status: 'Pandas', icon: 'pi pi-microsoft', color: '#FF9800', text: 'Pandas is the most popular python library that is used for data analysis. It provides highly optimized performance with back-end source code is purely written in C or Python.' },
        { status: 'Key Features', icon: 'pi pi-check', color: '#607D8B', text: 'Our application offers very high performance (thanks to FastAPI and React JS) the fastest frameworks available. Also our application is ergonomic thanks to PrimeReact which offers the ultimate collection of design-agnostic, flexible and accessible React UI Components.' }
    ];

    const customizedMarker = (item) => {
        return (
            <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status}>
                { item.image && <img src={item.image} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={200} className="p-shadow-2" />}
                <p>{item.text}</p>
            </Card>
        );
    };

    return (
        <div className="timeline-demo mt-4">
            <div className="card">                
                <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>
        </div>
    );
}
                 