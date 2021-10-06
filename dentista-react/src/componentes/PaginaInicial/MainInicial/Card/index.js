import './card.css'
export default function Card(props){
    return(
        <div className='flex'>
            {props.children}
        </div>
    )
}