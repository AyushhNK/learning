import {useState,useEffect} from 'react';

const useFetch=(url)=>{
	const [data,setData]=useState(null)
	const [isPending,setIsPending]=useState(true);
	const [error,setError]=useState()
		
	useEffect(()=>{
		fetch(url).then(res=>{
			console.log(res)
			if(!res.ok){
				throw Error('could not fetch data for that resource')
			}
			return res.json();
		}).then(data=>{
			setData(data)
			setIsPending(false);
			setError(null)
		}).catch(err=>{
			setIsPending(false)
			setError(err.message)
		})
	},[url]);
	return {data,isPending,error};
}

export default useFetch;