import {useSelector} from "react-redux";

const RightSide = () => {
    const inputData = useSelector((state)=> state.updateInput);
    return (
      <div>
        <p>
          <b>{inputData["firstName"]?inputData["firstName"]:'{First Name}'}</b> Lorem Ipsum is simply dummy text of the printing <b>{inputData["lastName"]?inputData["lastName"]:'{Last Name}'}</b> and typesetting industry. Lorem Ipsum has been the industry's <b>{inputData["telephone"]?inputData["telephone"]:'{Telephone No.}'}</b> standard dummy text ever since the 1500s, when <b>{inputData["email"]?inputData["email"]:'{Email}'}</b> an unknown printer took a galley of type and scrambled it to make a type specimen book. It <b>{inputData["address"]?inputData["address"]:'{Address}'}</b> has survived not only five centuries, but also the leap into electronic typesetting, remaining <b>{inputData["pincode"]?inputData["pincode"]:'{Pincode}'}</b> essentially unchanged. It was popularized in the 1960s <b>{inputData["district"]?inputData["district"]:'{District}'}</b> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing <b>{inputData["country"]?inputData["country"]:'{Country}'}</b> software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    );
  }
  
  export default RightSide;
  