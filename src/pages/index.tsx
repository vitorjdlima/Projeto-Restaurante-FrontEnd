import Head from 'next/head'
import styles from '../../styles/home.module.scss';

import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

export default function Home() {
  return (
    <>
    <Head>
      <title>SujeitoPizza - Faça seu login</title> 
    </Head>
    <div className={styles.containerCenter}>

      <div className={styles.login}>
        <form>
          <Input
            placeholder="Digite seu email"
            type="text"
          />

          <Input
            placeholder="Sua senha"
            type="password"
          />

          <Button
            type="submit"
            loading={false}>
              Acessar
          </Button>
          

        </form>
      </div>
    </div>
    </>
  )
}