import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({title, url, slug}) {
    const image = (
        <img
            className="mx-auto"
            src={url}
            alt={`Cover Image for ${title}`}
        />
    )
    return (
        <div className="sm:mx-0">
            {slug ? (
                <a href={slug} target="_blank" aria-label={title}>{image}</a>
            ) : (
                image
            )}
        </div>
    )
}
