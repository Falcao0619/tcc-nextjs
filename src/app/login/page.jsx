import styles from './page.module.css';

export default function Login() {
    return (
        <div className={styles.fundo}>
            <div className={styles.container}>
                <div className={styles.loginBox}>
                    <h2>Entre na sua conta</h2>
                    <form action="file:///J:/TCC-%20Bacili/Meu%20TCC/index.html#" method="post">
                        <input type="text" name="username" placeholder="Nome de usuário" />
                        <input type="password" name="password" placeholder="Senha" />
                        <input type="submit" value="Entrar" />
                    </form>
                </div>
            </div>
        </div>
    )
}