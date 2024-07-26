

import { useState } from "react";

interface SliderProps {
    images: string[];
}

export const listimages = [
    'https://bogatyr.club/uploads/posts/2023-03/1679944110_bogatyr-club-p-peizazhi-dlya-srisovki-foni-pinterest-1.jpg',
    'https://bogatyr.club/uploads/posts/2023-06/1687139258_bogatyr-club-p-stoga-na-rassvete-foni-instagram-76.jpg',
    'https://bogatyr.club/uploads/posts/2023-06/1687020883_bogatyr-club-p-dekorativnii-peizazh-foni-krasivo-41.jpg',
]

export function SliderBlock({images}: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function goToPrevious() {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1: prevIndex - 1));
    };

    function goToNext() {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <section className="w-[1184px] h-[400px] bg-white mt-11 m-auto block">
                <div className="">
                    <img src={images[currentIndex]} alt="img-slider" className="w-[480px] h-[400px]"/>
                        <div className="relative bottom-20 left-8">
                            <button className="bg-white text-blue-600 w-[50px] 
                                                h-[48px] text-[30px] relative mr-1" onClick={goToPrevious}>←</button>
                            <button className="bg-blue-600 text-white w-[50px] 
                                                    h-[48px] text-[30px] relative" onClick={goToNext}>→</button>
                        </div>
                </div>
                <div className="w-[540px] h-[400px] relative bottom-[390px] left-[510px]">
                    <h2 className="text-4xl italic">Слайд {currentIndex}</h2>
                    <p className="text-[20px] text-gray-500 relative top-4">
                        Сайт рыбатекст поможет дизайнеру, верстальщику, 
                        вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, 
                        а начинающему оратору отточить навык публичных выступлений в домашних условиях. 
                        При создании генератора мы использовали небезизвестный универсальный код речей.
                    </p>
                    <button className="bg-blue-700 text-white p-3 px-6 relative top-7 
                                       transition-all duration-300 hover:bg-blue-500">Кнопка</button>
                </div>
            </section>
        </>
    );
}