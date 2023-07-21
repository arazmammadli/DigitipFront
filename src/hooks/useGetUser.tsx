import React, { useState, useEffect } from 'react'
import { selectCurrentToken } from '../features/reducers/authSlice';
import { useShowMeQuery } from '../features/user/userApiSlice';
import { useAppSelector } from '../redux/hooks';
import IUser from '../types/auth'

type UserData = IUser;
type SetUserData = React.Dispatch<IUser>

const useGetUser = (): [UserData, SetUserData] => {
    const [userData, setUserData] = useState<IUser>({} as IUser);
    const { token } = useAppSelector(selectCurrentToken);
    const { data, isSuccess } = useShowMeQuery("user", { skip: !Boolean(token) });

    useEffect(() => {
        if (isSuccess) {
            setUserData(data);
        }
    }, [isSuccess, data])

    return [userData, setUserData]
};

export default useGetUser;