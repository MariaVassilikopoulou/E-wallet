import {useLocation,useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Card(props){
    const {card}= props;
    const cardInfo = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(props);
    console.log= (cardInfo);

    function handleClick(){
       navigate('/info', {state: {event:cardInfo.state.event}});
            
        }
        return (
            <section>
                
            </section>
        )
    }
    
export default Card;