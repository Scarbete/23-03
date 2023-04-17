import './Buttons.css'
export default function Buttons (props) {

    return (
        <div className={'btnBlock'}>
            <div className={'container'}>
                <div className={'btnBox'}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}