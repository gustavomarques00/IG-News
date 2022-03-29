import Head from "next/head";
import {GetStaticProps} from 'next'
import { SubscribeButton } from "../components/SubscribeButton";
import styles from './home.module.scss'
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({product}) {
  return (
    <>
      <Head>
        <title>Home | IG News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> World.</h1>
          <p>Get access to all the publications<br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps =  async () => {
  const price = await stripe.prices.retrieve('price_1KJQ7oDZuf32mLwnwDpejMUk')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product 
    },
    revalidate: 60*60*24 //24 Horas
  }

}
