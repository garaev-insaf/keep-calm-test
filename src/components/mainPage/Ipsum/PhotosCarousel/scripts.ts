import { PhotosType } from './static';
interface IChangeSlidesProps {
    val: string,
    marginLeftOfSliderState: number,
    sliderTransitionDurationTime: number,
    imagesState: string[],
    setMarginLeftOfSliderState: React.Dispatch<React.SetStateAction<number>>
}

export const changeSlides = <IChangeSlidesProps>(val, marginLeftOfSliderState, sliderTransitionDurationTime, imagesState, setMarginLeftOfSliderState) => {
    // делаем двойную проверку: на достижение конечной точки и присутствие транзишна, чтобы пользователь не имел возможности прокликать, пока идёт асинхронное событие
    if (val == 'left' && marginLeftOfSliderState !== -2 && sliderTransitionDurationTime !== 0) {
        setMarginLeftOfSliderState(marginLeftOfSliderState + 1);
    }
    else if (val === 'right' && marginLeftOfSliderState !== -(imagesState.length - 3) && sliderTransitionDurationTime !== 0) {
        setMarginLeftOfSliderState(marginLeftOfSliderState - 1);
    }
}

export const popAndUnshiftActionWithArray = (arr: PhotosType[]) => {
    // добавляем в начало и в конец по 3 элемента, чтобы при приближении к границам слайдера, не было пустых фотографий
    const lastItems = arr.slice(-3);
    const firstItems = arr.slice(0, 3);
    const result = lastItems.concat(arr, firstItems);
    return result;
}
