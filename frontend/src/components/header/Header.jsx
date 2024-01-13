import './Header.css'

function Header() {
    return(
        <header>
        <div class="logo-title">
            <div class="logo">
                <img src="caminho-para-sua-logo.png" alt="Logo"/>
            </div>
            <h1>Pulse Beat</h1>
        </div>

        <div class="search-bar">
            <input type="text" class="search-input" placeholder="Pesquisar..."/>
        </div>

        <div class="nav-links">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
    </header>
    );
}

export default Header