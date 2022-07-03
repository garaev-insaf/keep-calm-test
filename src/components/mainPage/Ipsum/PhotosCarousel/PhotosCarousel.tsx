import * as React from "react";
import { useState, useEffect } from "react";
import { changeSlides, popAndUnshiftActionWithArray } from "./scripts";
import { TRANSITION_DURATION_TIME, MARGIN_LEFT_STEP, photosList } from './static';
import './styles/PhotosCarousel.scss'

const PhotosCarousel = () => {
    // Задача реализовать бесконечный слайдер, не зависящий от кол-ва слайдов (если мы добавим или убавим их кол-во слайдер продолжит корректно работать) ♥
    const [marginLeftOfSliderState, setMarginLeftOfSliderState] = useState(-1);
    const [imagesState, setImagesState] = useState(() => popAndUnshiftActionWithArray(photosList)); // берём стейт с добавленными по обе стороны слайдами
    const [sliderTransitionDurationTime, setSliderTransitionDurationTime] = useState(TRANSITION_DURATION_TIME);
    const handleSlideChangeClick = (val: string) => {
        changeSlides(val, marginLeftOfSliderState, sliderTransitionDurationTime, imagesState, setMarginLeftOfSliderState);
    }

    useEffect(() => {
        console.log(marginLeftOfSliderState);
        // Если мы достигли конечного слайда, обнуляем transition duration
        // делается это с той целью, чтобы пользователь не видел подмену фотографий
        if (marginLeftOfSliderState === 0 || marginLeftOfSliderState === -(imagesState.length - 5)) {
            setTimeout(() =>
                setSliderTransitionDurationTime(0), TRANSITION_DURATION_TIME)

        }
    }, [marginLeftOfSliderState]);

    useEffect(() => {
        if (marginLeftOfSliderState === 0) {
            setMarginLeftOfSliderState(-(imagesState.length - 6)); // вычитаем 6, т.к. добавили в начало и в конец по 3 элемента (в данном случае мы двигаемся вперёд)
            setTimeout(() => setSliderTransitionDurationTime(TRANSITION_DURATION_TIME), 50)
        }
        else if (marginLeftOfSliderState === -(imagesState.length - 5)) { // вычитаем 5, т.к. всего 5 элементов (в данном случае мы двигаемся назад)
            setMarginLeftOfSliderState(-1);
            setTimeout(() => setSliderTransitionDurationTime(TRANSITION_DURATION_TIME), 50)
        }
        else if (sliderTransitionDurationTime === 0) {
            setTimeout(() => setSliderTransitionDurationTime(TRANSITION_DURATION_TIME), 50)
        }

    }, [sliderTransitionDurationTime])

    return (
        <>
            <div className="photos-carousel" id="photos-carousel">
                <div className="layout-wrapper">
                    <div
                        style={{ marginLeft: `${marginLeftOfSliderState * MARGIN_LEFT_STEP}px`, transitionDuration: `${sliderTransitionDurationTime}ms` }}
                        className="photos-carousel-wrapper">
                        {
                            imagesState.length > 0 ?
                                imagesState.map((photo, index) =>
                                    <img src={photo} alt="photo" key={index} />)
                                : null
                        }
                    </div>
                </div>
                <div className="buttons-wrapper">
                    <button className="button_prew-slide button_photos-slide" onClick={() => handleSlideChangeClick('left')}><img src="/images/icons/left-arrow.svg" alt="left-arrow" /></button>
                    <button className="button_next-slide button_photos-slide" onClick={() => handleSlideChangeClick('right')}><img src="/images/icons/right-arrow.svg" alt="right-arrow" /></button>
                </div>
            </div>
        </>
    );
};

export default PhotosCarousel;

