import PropTypes from 'prop-types'
import Button from './Button'
const header = ({ title }) => {
    const onClick=()=>{
        console.log('click')
    }
  return (
    <header className='header'>
      <h1>{title}</h1>
     <Button color='green' text='Add' onClick={onClick} />
      </header>
  )
}
Headers.defaultProps = {
    title: 'Task Tracker'
}
Headers.PropTypes ={
    title: PropTypes.string,
}

//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default header
