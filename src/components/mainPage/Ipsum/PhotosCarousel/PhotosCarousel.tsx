import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { changeSlides, popAndUnshiftActionWithArray } from "./scripts";
import { TRANSITION_DURATION_TIME, MARGIN_LEFT_STEP, photosList, PhotosType, MARGIN_LEFT_STEP_MOBILE } from './static';
import { ModalContext } from '../../../modal/ModalContext/ModalContext';
import './styles/PhotosCarousel.scss'
import './styles/ModalCarousel.scss'

const PhotosCarousel = ({ imageWidth = 0, marginLeftOfSliderStateInitial = -3 }) => {
    const { handleModal } = useContext(ModalContext)
    // Задача реализовать бесконечный слайдер, не зависящий от кол-ва слайдов (если мы добавим или убавим их кол-во слайдер продолжит корректно работать) ♥
    const [marginLeftOfSliderState, setMarginLeftOfSliderState] = useState(marginLeftOfSliderStateInitial);
    const [imagesState, setImagesState] = useState<PhotosType[]>(() => popAndUnshiftActionWithArray(photosList)); // берём стейт с добавленными по обе стороны слайдами
    const [sliderTransitionDurationTime, setSliderTransitionDurationTime] = useState(TRANSITION_DURATION_TIME);
    const [mobileSlideFlag, setMobileFlagState] = useState(() => true)
    const handleSlideChangeClick = (val: string) => {
        setMobileFlagState(() => false);
        changeSlides(val, marginLeftOfSliderState, sliderTransitionDurationTime, imagesState, setMarginLeftOfSliderState);
    }

    useEffect(() => {
        // Если мы достигли конечного слайда, обнуляем transition duration
        // делается это с той целью, чтобы пользователь не видел подмену фотографий
        if (marginLeftOfSliderState === -2 || marginLeftOfSliderState === -(imagesState.length - 3)) {
            setTimeout(() =>
                setSliderTransitionDurationTime(0), TRANSITION_DURATION_TIME)

        }
    }, [marginLeftOfSliderState]);

    useEffect(() => {
        if (marginLeftOfSliderState === -2) {
            setMarginLeftOfSliderState(-(imagesState.length - 4)); // вычитаем 6, т.к. добавили в начало и в конец по 3 элемента (в данном случае мы двигаемся вперёд)
            setTimeout(() => setSliderTransitionDurationTime(TRANSITION_DURATION_TIME), 50)
        }
        else if (marginLeftOfSliderState === -(imagesState.length - 3)) { // вычитаем 5, т.к. всего 5 элементов (в данном случае мы двигаемся назад)
            setMarginLeftOfSliderState(-3);
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
                        style={{ marginLeft: `${(imageWidth !== 0 ? marginLeftOfSliderState * imageWidth : window.innerWidth > 576 ? marginLeftOfSliderState * MARGIN_LEFT_STEP + (window.innerWidth - MARGIN_LEFT_STEP) / 2 + 10 : marginLeftOfSliderState * MARGIN_LEFT_STEP_MOBILE + (window.innerWidth - MARGIN_LEFT_STEP_MOBILE - 10) / 2)}px`, transitionDuration: `${sliderTransitionDurationTime}ms` }}
                        className="photos-carousel-wrapper">
                        {
                            imagesState.length > 0 ?
                                imagesState.map((photo, index) =>
                                    photo.src.length > 0 ?
                                        <div className="image-wrapper"  onClick={imageWidth === 0 ? () => handleModal(<PhotosCarousel imageWidth={window.innerWidth > 1300 ? 1300 : window.innerWidth} currentImage={'/images/ipsum/first-photo.png'} marginLeftOfSliderStateInitial={marginLeftOfSliderState} />) : null} key={index}>
                                            <img src={photo.src} alt="photo" />
                                            {
                                                photo.descr.length > 0 && photo.descriptionPos >= 1 && photo.descriptionPos <= 4 ?
                                                    <div className={`photo-description ${photo.descriptionPos === 1 ? 'top' : photo.descriptionPos === 2 ? 'right' : photo.descriptionPos === 3 ? 'bottom' : 'left'}`}> <div className="shadow"></div> <p>{photo.descr}</p></div>
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
                    <button className="button_prew-slide button_photos-slide" onClick={() => handleSlideChangeClick('left')}><img src={imageWidth !== 0 ? '/images/icons/left-arrow-white.svg' : ' /images/icons/left-arrow.svg'} alt="left-arrow" /></button>
                    <button className="button_next-slide button_photos-slide" onClick={() => handleSlideChangeClick('right')}><img src={imageWidth !== 0 ? '/images/icons/right-arrow-white.svg' : ' /images/icons/right-arrow.svg'} alt="right-arrow" /></button>
                </div>
            </div>
        </>
    );
};

export default PhotosCarousel;

