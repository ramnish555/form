import InputField from './InputField';

const LeftSide = () => {
  return (
    <>
      <form>
        <InputField data={{"type": "text","value": "First Name","name": "firstName"}}/>
        <InputField data={{"type": "text","value": "Last Name","name": "lastName"}}/>
        <InputField data={{"type": "number","value": "Telephone Number","name": "telephone"}}/>
        <InputField data={{"type": "email","value": "Email","name": "email"}}/>
        <InputField data={{"type": "text","value": "Address","name": "address"}}/>
        <InputField data={{"type": "number","value": "Pin Code","name": "pincode"}}/>
        <InputField data={{"type": "text","value": "District","name": "district"}}/>
        <InputField data={{"type": "text","value": "Country","name": "country"}}/>
      </form>
    </>
  );
}

export default LeftSide;
