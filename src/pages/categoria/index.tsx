import Head from "next/head"
import styles from './styles.module.scss'

import { Header } from "../../components/Header"
import { useState, FormEvent } from "react"
import { setupAPIClient } from "../../services/api"
import { toast } from "react-toastify"
import { canSSRAuth } from "../../utils/canSSRAuth"

export default function Categoria(){

    const [name, setName] = useState('')

    async function handleRegister(event:FormEvent) {
        event.preventDefault();
        if(name == ''){
            return 
        }
        const apiClient =  setupAPIClient()
        await apiClient.post('/category', { name: name})

        toast.success('Categoria cadastrada com sucesso')
        setName('')
    }

    return(
        <>
        <Head>
            <title> Nova Categoria </title>
        </Head>
        <div>
            <Header/>
            <main className={styles.container}  onSubmit={handleRegister}>
                <h1> Cadastrar categorias </h1>

                <form className={styles.form}>
                    <input type="text" placeholder="Digite o nome da categoria" className={styles.input} value={name} onChange={ (e) => setName(e.target.value) }/>
                    <button className={styles.buttonAdd} type="submit">
                        Cadastrar
                    </button>
                </form>
            </main>
        </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {
            
        }
    }
})