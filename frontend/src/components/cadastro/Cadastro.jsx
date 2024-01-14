import './Cadastro.css'

function Cadastro() {
    return(
     <>
    <div className='container'>
       
        <form>
            <h1 className='text'>Cadastre-se</h1>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required/>
    
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required/>
    
            <label for="senha">Senha:</label>
            <input type="password" id="senha" name="senha" required/>
    
            <button type="submit">Cadastrar</button>
        </form>
    </div>
     </>
    );
}

export default Cadastro