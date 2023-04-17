import './Header.css'

export default function Header (props) {

    return (
        <header className={'menu'}>
            <div className={'container'}>
                <div className={'menu_inner'}>
                    <div>
                        <label htmlFor="search"></label>
                        <input aria-placeholder={'Search...'} type={'text'} id="search" className={'searching'}/>
                    </div>
                    <nav className={'menu_nav'}>
                        <ul className={'menu_list'}>
                            {props.navbar}
                        </ul>
                    </nav>
                    <button className={'menu_btn'}>Sign in</button>
                </div>
            </div>
        </header>
    )
}