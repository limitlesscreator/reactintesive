import React from 'react';
import s from './Shape.module.css'

export class Shape extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <>
            <div className={this.props.side === 'left' ? s.firstLineShapes : s.secondLineShapes}>
                <div className={s.shape}></div>
                <div className={s.shape}></div>
                <div className={s.shape}></div>
                <div className={s.shape}></div>
                <div className={s.shape}></div>
                <div className={s.shape}></div>
                <div className={s.shape}></div>
                <div className={s.shape}></div>
                <div className={s.shape}></div>
            </div>
        </>
    }
}