import {getRandomProduct} from "../lib/api";
import HeroProduct from "../components/hero-product";
import Layout from "../components/layout";
import Head from "next/head";
import Container from "../components/container";

export default function Product({preview, products}) {
    const heroProduct = products[0]
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Perfect Gift Picker</title>
                </Head>
                <Container>
                    <section className="flex-col md:flex-row flex items-center min-h-screen md:justify-center">
                        <div className="pt-16 pb-24 text-center flex-1">
                            <HeroProduct
                                name={heroProduct.name}
                                image={heroProduct.image}
                                link={heroProduct.link}
                            />
                        </div>
                    </section>
                </Container>
            </Layout>
        </>
    )
}

export async function getServerSideProps({preview = false}) {
    const products = await getRandomProduct(preview)
    return {
        props: {preview, products},
    }
}

