import {SITE_URL, SITE_INFO} from "../lib/constants";
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";

export default function Intro() {
    return (
        <div className="text-center fixed bottom-0 left-0 font-0 w-full flex items-center justify-center">
            <span className="text-xs mr-4 -ml-12 font-bold uppercase">Share</span>
            <EmailShareButton
                url={SITE_URL}
                subject="I've found this website that helps you find gifts"
                body={SITE_INFO}>
                <EmailIcon size={36} />
            </EmailShareButton>
            <FacebookShareButton
                url={SITE_URL}
                quote={SITE_INFO}>
                <FacebookIcon size={36} />
            </FacebookShareButton>
            <TwitterShareButton
                url={SITE_URL}
                title={SITE_INFO}>
                <TwitterIcon size={36} />
            </TwitterShareButton>
            <RedditShareButton
                url={SITE_URL}
                title={SITE_INFO}>
                <RedditIcon size={36} />
            </RedditShareButton>
            <WhatsappShareButton
                url={SITE_URL}
                title={SITE_INFO}>
                <WhatsappIcon size={36} />
            </WhatsappShareButton>
        </div>
    )
}