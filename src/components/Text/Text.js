import './Text.css'

export default function Text (propis) {
    return (
        <div className={'container'}>
            <div className={'textBox'}>
                <h1 className={'textH1'}>{propis.txt}</h1>
                <span className={'textSpan'}>{propis.about}</span>
            </div>
        </div>
    )
}