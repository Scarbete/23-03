import React from "react"
import './Content.css'

export default function Content (props) {
    return (
        <div className={'main'} key={'mainBox'}>
            <div className={'container'} key={'contentContainer'}>
                <div className={'main_inner'} key={'mainInner'}>
                    {props.card}
                </div>
            </div>
        </div>
    )
}