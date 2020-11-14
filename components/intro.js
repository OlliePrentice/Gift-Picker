import Start from "../components/start";
import Lottie from 'react-lottie';
import animationData from '../lotties/gift-with-stars.json';

export default function Intro() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <section className="flex-col md:flex-row flex items-center min-h-screen md:justify-center">
            <div className="pt-12 pb-20 text-center">
                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}
                    isClickToPauseDisabled={true}
                />
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight text-center mb-12">
                    Instant Gift Picker
                </h1>
                <Start/>

            </div>
        </section>
    )
}