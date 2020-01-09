/**
 * The WithSpinner component takes in a component, and returns a new component that takes in two props
 * 
 * 1) isLoading
 * 2) otherProps
 * 
 * and return a SpinnerComponent or the Wrapped component based on the isLoading props
 */

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (<SpinnerComponent />) : (<WrappedComponent {...otherProps} />)
}

//This is the equivalent of 

const WithSpinner2 = WrappedComponent => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (<SpinnerComponent />) : (<WrappedComponent {...otherProps} />)
  }
}

//and 

const WithSpinner3 = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (<SpinnerComponent />) : (<WrappedComponent {...otherProps} />)
  }
}

//Basically HOC (with curry) takes in a component and return a new component 