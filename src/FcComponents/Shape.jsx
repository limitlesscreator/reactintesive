import React from 'react';
import s from "../Components/Shape.module.css";

export const Shape = ({side}) => {
    return (
        <>
            <div className={side === 'left' ? s.firstLineShapes : s.secondLineShapes}>
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
    );
};
