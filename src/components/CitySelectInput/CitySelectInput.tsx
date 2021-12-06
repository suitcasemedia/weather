import React  from 'react';
import  classes from  './cityselect.module.scss';

interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}


type TOwnProps = {
  handleChange:  Function;
  city: string;
}


  type Props = TOwnProps ;
  const CitySelectInput : React.FC<Props> = ({handleChange,city}) => {
  
  return (
    <div >
      <select
      className={classes.customSelect}
        onChange={(e) => handleChange(e)}
        value={city}
      >
        <option value="London">London</option>
        <option value="Paris">Paris</option>
        <option value="New York">New York</option>
        <option value="Moscow">Moscow</option>
        <option value="Dubai">Dubai</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Singapore">Singapore</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Madrid">Madrid</option>
        <option value="Rome">Rome</option>
        <option value="Doha">Doha</option>
        <option value="Chicago">Chicago</option>
        <option value="Abu Dhabi">Abu Dhabi</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Amsterdam">Amsterdam</option>
        <option value="St. Petersburg">St. Petersburg</option>
        <option value="Toronto">Toronto</option>
        <option value="Sydney">Sydney</option>
        <option value="Berlin">Berlin</option>
        <option value="Las Vegas">Las Vegas</option>
        <option value="Washington">Washington</option>
        <option value="Istanbul">Istanbul</option>
        <option value="Vienna">Vienna</option>
        <option value="Beijing">Beijing</option>
      </select>
      <span className={classes.customArrow}></span>
    </div>
  );
};

export default CitySelectInput;
