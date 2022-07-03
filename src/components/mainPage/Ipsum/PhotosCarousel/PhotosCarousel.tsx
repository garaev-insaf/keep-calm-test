import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { changeSlides, popAndUnshiftActionWithArray } from "./scripts";
import { TRANSITION_DURATION_TIME, MARGIN_LEFT_STEP, photosList, PhotosType } from './static';
import { ModalContext } from '../../../modal/ModalContext/ModalContext';
import './styles/PhotosCarousel.scss'

const PhotosCarousel = () => {
    const { handleModal } = useContext(ModalContext)
    // Задача реализовать бесконечный слайдер, не зависящий от кол-ва слайдов (если мы добавим или убавим их кол-во слайдер продолжит корректно работать) ♥
    const [marginLeftOfSliderState, setMarginLeftOfSliderState] = useState(-1);
    const [imagesState, setImagesState] = useState<PhotosType[]>(() => popAndUnshiftActionWithArray(photosList)); // берём стейт с добавленными по обе стороны слайдами
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
                                    photo.src.length > 0 ?
                                        <div className="image-wrapper" onClick={() => handleModal(<PhotosCarousel />)}>
                                            <img src={photo.src} alt="photo" key={index} />
                                            {
                                                photo.descr.length > 0 && photo.descriptionPos >= 1 && photo.descriptionPos <= 4 ?
                                                    <div className={`photo-description ${photo.descriptionPos === 1 ? 'top' : photo.descriptionPos === 2 ? 'right' : photo.descriptionPos === 3 ? 'bottom' : 'left'}`}><p>{photo.descr}</p></div>
                                                    : null
                                            }
                                        </div>


                                        : null
                                )
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

