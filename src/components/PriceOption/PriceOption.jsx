import PropTypes from 'prop-types'
import Featurse from '../Featurse/Featurse';

const PriceOption = ({option}) => {
    const {name, price,features} =option
    return (
        <div className='bg-lime-600 flex flex-col p-6'>
            <h2 className='mb-10'>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-3xl font-medium'>/mon</span>
            </h2>
            <h3 className='text-4xl font-semibold mb-5'>{name}</h3>
            
                <div className='flex-grow'>
                {
                    features.map((feature,index) => <Featurse key={index} feature={feature}></Featurse>)
                }
                </div>
                <button className='bg-white mt-12 w-2/4 duration-1000 p-2 font-bold rounded-lg hover:w-full'>Bye now</button>
            

        </div>
    );
};
PriceOption.propTypes={
option:PropTypes.object
}
export default PriceOption;