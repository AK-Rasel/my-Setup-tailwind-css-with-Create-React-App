import { AiFillCheckCircle } from 'react-icons/ai';
import PropTypes from 'prop-types'
const Featurse = ({feature}) => {
    return (
        <div>
            <p className='flex align-middle text-base font-semibold gap-2 mb-2 text-start'> 
                <AiFillCheckCircle className='text-lime-700'></AiFillCheckCircle> 
                {feature}
            </p>
            
        </div>
    );
};
Featurse.propTypes={
    feature:PropTypes.string
    }

export default Featurse;