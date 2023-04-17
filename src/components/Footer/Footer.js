import './Footer.css'

export default function Footer (contacts) {
    return (
        <footer className={'footer'}>
            <div className={'container'}>
                <div className={'social'}>
                    <div className={'subtitle'}>Мы в социальных сетях:</div>
                    <a href="#" className={'link'}>{contacts.inst}</a>
                    <a href="#" className={'link'}>{contacts.fcb}</a>
                </div>
                <div className={'call'}>
                    <div className={'subtitle'}>Или позвоните нам</div>
                    <a href="#" className={'link'}>{contacts.firstNumber}</a>
                    <a href="#" className={'link'}>{contacts.secondNumber}</a>
                </div>
            </div>
        </footer>
    )
}