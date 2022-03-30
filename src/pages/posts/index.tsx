import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>12 de Março de 2022</time>
                        <strong>Titulo do Post ficará aqui</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula neque, blandit at ex rutrum, lobortis ultricies erat. In eu dignissim ligula. Cras nec nisl in eros tempus aliquam id vel nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque consequat vitae erat nec finibus. Aliquam iaculis vitae mauris ac ultrices. Nulla sed sodales nisl, in elementum tellus.</p>
                    </a>
                    <a>
                        <time>12 de Março de 2022</time>
                        <strong>Titulo do Post ficará aqui</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula neque, blandit at ex rutrum, lobortis ultricies erat. In eu dignissim ligula. Cras nec nisl in eros tempus aliquam id vel nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque consequat vitae erat nec finibus. Aliquam iaculis vitae mauris ac ultrices. Nulla sed sodales nisl, in elementum tellus.</p>
                    </a>
                    <a>
                        <time>12 de Março de 2022</time>
                        <strong>Titulo do Post ficará aqui</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula neque, blandit at ex rutrum, lobortis ultricies erat. In eu dignissim ligula. Cras nec nisl in eros tempus aliquam id vel nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque consequat vitae erat nec finibus. Aliquam iaculis vitae mauris ac ultrices. Nulla sed sodales nisl, in elementum tellus.</p>
                    </a>
                </div>
            </main>
        </>
    );
}