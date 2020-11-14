import Link from 'next/link'
import CoverImage from '../components/cover-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HeroProduct({
                                        name,
                                        image,
                                        link,
                                    }) {

    return (
        <section className="max-w-3xl mx-auto">
            <div className="text-left mb-4">
                <Link href="/">
                    <a className="mb-4 hover:underline"><FontAwesomeIcon icon="backspace" /> Go Back</a>
                </Link>
            </div>
            <div className="mb-4 max-w-xs mx-auto">
                <CoverImage title={name} slug={link} url={image}/>
            </div>
            <div>
                <h3 className="mb-12 text-4xl lg:text-6xl leading-tight text-center">
                    <a href={link} target="_blank">{name}</a>
                </h3>
                <a href={link} target="_blank"
                   className="inline-block bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 text-2xl rounded">Buy
                    from Amazon</a>
            </div>
            <div className="pt-8">
                <Link href="/product">
                    <a className="mb-4 hover:underline"><FontAwesomeIcon icon="redo-alt" /> Pick Again</a>
                </Link>
            </div>

        </section>
    )
}