import { createSlice } from "@reduxjs/toolkit";

interface IGenres {
    img: string
    background: string
    title: string
}

interface IState {
    genresList: IGenres[]
}

const initialState: IState = {
    genresList: [
        {title: 'Подкасты', background: 'rgb(39, 133, 106)', img: 'https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5'},
        {title: 'Для тебя', background: 'rgb(30, 50, 100)', img: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe'},
        {title: 'Чарты', background: 'rgb(141, 103, 171)', img: 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg'},
        {title: 'Новые', background: 'rgb(232, 17, 91)', img: 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112'},
        {title: 'Рекомендации', background: 'rgb(141, 103, 171)', img: 'https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg'},
        {title: 'Мероприятия', background: 'rgb(115, 88, 255)', img: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg'},
        {title: 'Поп', background: 'rgb(180, 155, 200)', img: 'https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg'},
        {title: 'Хип-хоп', background: 'rgb(240, 55, 165)', img: 'https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg'},
        {title: 'Настроение', background: 'rgb(156, 240, 225)', img: 'https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg'},
        {title: 'Рок', background: 'rgb(215, 242, 125)', img: 'https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg'},
        {title: 'Вечеринка', background: 'rgb(141, 103, 171)', img: 'https://t.scdn.co/images/fada056dcfd54cd28faf80d62b7059c6.jpeg'},
        {title: 'Для Геймеров', background: 'rgb(232, 17, 91)', img: 'https://i.scdn.co/image/ab67706f0000000221a2087747d946f16704b8af'},
        {title: 'Dance', background: 'rgb(115, 88, 255)', img: 'https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg'},
        {title: 'Релакс', background: 'rgb(175, 40, 150)', img: 'https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg'},
        {title: 'Инди', background: 'rgb(235, 30, 50)', img: 'https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg'},
        {title: 'Тренировка', background: 'rgb(119, 119, 119)', img: 'https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15'},
        {title: 'Фокус', background: 'rgb(80, 55, 80)', img: 'https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934'},
        {title: 'Для дома', background: 'rgb(13, 115, 236)', img: 'https://t.scdn.co/images/04da469dd7be4dab96659aa1fa9f0ac9.jpeg'},
    ]
}

const genres = createSlice({
    name: 'genres',
    initialState,
    reducers: {}
})

export default genres.reducer