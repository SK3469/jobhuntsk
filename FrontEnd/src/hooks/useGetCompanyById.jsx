import { setSingleCompany } from '@/redux/companySlice'
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));  //jobs actually defind the jobslice `allJobs[]`
                }

            } catch (error) {
                console.log(error)
            }

        }
        fetchSingleCompany();
    }, [companyId, dispatch]) //array dependencies..
}
export default useGetCompanyById