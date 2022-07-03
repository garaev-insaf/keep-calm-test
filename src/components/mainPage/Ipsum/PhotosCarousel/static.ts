export const TRANSITION_DURATION_TIME = 500; // время анимации, мс
export const MARGIN_LEFT_STEP = 400; // шаг слайда, px
export const MARGIN_LEFT_STEP_MOBILE = 290
export type PhotosType = {
    src: string,
    descr: string,
    descriptionPos: number, // нумерация идёт по принципу отсутпов (top - 1, right - 2, bottom - 3, left - 4)
}

export const photosList:PhotosType[] = [
    {
        src: '/images/ipsum/fifth-photo.png',
        descr: '',
        descriptionPos: 0,
    },
    {
        src: '/images/ipsum/first-photo.png',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        descriptionPos: 3,
    },
    {
        src: '/images/ipsum/second-photo.png',
        descr: 'Lorem ipsum dolor sit amet',
        descriptionPos: 2,
    },
    {
        src: '/images/ipsum/third-photo.png',
        descr: '',
        descriptionPos: 0,
    },
    {
        src: '/images/ipsum/fourth-photo.png',
        descr: '',
        descriptionPos: 0,
    }
    
]