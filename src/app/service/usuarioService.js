import apiService from "../apiservice";

class UsuarioService extends apiService{

constructor(){
    super('api/usuarios')
}

autenticar(credenciais){
    return this.post('/autenticar', credenciais)
}

obterSaldoporId(id){
    return this.get(`/${id}/saldo`)

}

}

export default UsuarioService