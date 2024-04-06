import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Card(props){
    const {card}= props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(props);

    function handleClick(){
        const item={
            
        }
    }
}