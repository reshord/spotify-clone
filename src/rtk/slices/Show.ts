import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IShowList } from "../../types/types";
import { getShows } from "../../axios";
import { getNewShowListItems } from "../hooks/addSongsToPlaylist";

interface IState {
    message: string | null
    showList: IShowList[] | null
    currentShow: IShowList
}

const initialState: IState = {
    message: null,
    currentShow: {
          id: '',
          description: '',
          title: '',
          author: '',
          image: '',
          items: [],
          background: ''
    },
    showList: [
        {
          id: '6jCMUw8PM5C1fLpytTCzkH',
          description: 'Подкаст терапія - це діалоги двох друзів. Спартак - український лікар, кандидат психологічних наук. Янович - український актор та комік. Наука досі не може пояснити, як вони зійшлися і чому досі спілкуються. Власне, це єдине, що й хлопці не можуть пояснити. На все інше в подкаст терапії відповіді є.',
          title: 'Подкаст терапія',
          author: 'Янович та Суббота',
          image: 'https://i.scdn.co/image/ab67656300005f1fa01d33e32c29774196640fd1',
          background: 'rgb(32, 0, 80)',
          items: []
        },
        {
          id: '0Dn92yfXOzwRk9josHzloV',
          description: 'Як урешті-решт перестати боятися англійської мови? Що потрібно, аби кінець кінцем сказати свої перші 20 слів англомовному іноземцеві? Чому та англійська все вчиться-вчиться, та ніяк не вивчиться?',
          title: 'Ніжний інгліш',
          author: 'The Ukrainians Audio',
          image: 'https://i.scdn.co/image/ab67656300005f1fbf4c77ef31b47a2b64b1f579',
          background: 'rgb(168, 96, 152)',
          items: []
        },
        {
          id: '3GcLxZlT7s01eLr25BwFbj',
          description: 'Podcast by Шит ай ноу Продакшн',
          title: 'Лиходії',
          author: 'Діма Малєєв',
          image: 'https://i.scdn.co/image/ab67656300005f1ff0b2b9523d9b17adeb7cff93',
          background: 'rgb(168, 40, 8)',
          items: []
        },
        {
          id: '4rOoJ6Egrf8K2IrywzwOMk',
          description: 'The official podcast of comedian Joe Rogan. Follow The Joe Rogan Clips show page for some of the best moments from the episodes.',
          title: 'The Joe Rogan Experience',
          author: 'Joe Rogan',
          image: 'https://i.scdn.co/image/d3ae59a048dff7e95109aec18803f22bebe82d2f',
          background: 'rgb(248, 136, 72)',
          items: []
        },
        {
          id: '6khaSnShrFHPk94pumSaY4',
          description: 'Це Хороший Поганий Злий Подкаст \(ХПЗП)\ Підтримати наш подкаст на Патреоні: Подкаст про все що нас оточує та непокоїть, з легким уклоном на кіно.',
          title: 'Хороший Поганий Злий Подкаст',
          author: 'Хороший Поганий Злий Подкаст',
          image: 'https://i.scdn.co/image/ab67656300005f1f7a7f5cbbdb28ca7f87773339',
          background: 'rgb(240, 0, 232)',
          items: []
        },
        {
          id: '4fvJPP6Ib0XKI3du5fjaoa',
          description: 'Podcast by Шит ай ноу Продакшн',
          title: 'Шит ай ноу Лайв',
          author: 'Шит ай ноу Продакшн',
          image: 'https://i.scdn.co/image/8ab439438df54d6ce39afc1d02c310a381c38bda',
          background: 'rgb(240, 88, 152)',
          items: []
        },
    ]
}

const Shows = createSlice({
    name: 'show',
    initialState,
    reducers: {
      setCurrentShow: (state, {payload}: PayloadAction<IShowList>) => {
          state.currentShow = payload
      }
    },
    extraReducers: {
        // Get Show
        [getShows.pending.toString()]: (state) => {

        },
        [getShows.fulfilled.toString()]: (state, action) => {
            state.showList?.filter(el => {
              if(el.id === action.payload.id) {
                const {items} = action.payload.episodes
                el.items = getNewShowListItems(items)
                state.currentShow.items = getNewShowListItems(items)
              }
               
            })
        },
        [getShows.rejected.toString()]: (state) => {

        },
    }
})

export const {setCurrentShow} = Shows.actions
export default Shows.reducer