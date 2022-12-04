import '../../styles/Search/GenreCard.css'

interface IProps {
    img: string
    title: string
    background: string
}

const GenreCard: React.FC<IProps> = ({img, background, title}) => {
    return ( 
        <div className="genreCard" style={{backgroundColor: `${background}`}}>
            <div className='genreTitle'>{title}</div>
            <img className='backgroundImg' src={img} alt="" />
        </div>
     );
}
 
export default GenreCard;