import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../store/axios";
import {
  selectToken,
  selectFirstName,
  selectLastName,
  updateProfile,
} from "../../store/reducer";

const PROFILE_URL = "/user/profile";


function Information () {
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);
  const [edit, setEdit] = useState(false);

  // GET :
  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get(PROFILE_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = response?.data?.body;
      console.log(data);
      console.log(response);

      dispatch(
        updateProfile({
          ...data,
        })
      );
    };
    getProfile();
  }, []);
 

  

return (
    <div className='information'>
      <h1> Welcome back <br /> {firstName} {lastName} </h1>
      <button > Edit Name </button>
    </div>
  )
}

export default Information