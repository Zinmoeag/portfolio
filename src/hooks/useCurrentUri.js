import { useEffect,useMemo} from 'react'
import { useParams,useSearchParams } from 'react-router-dom'

export default function useCurrentUri() {
	const {type} = useParams();


	const [searchParams, setSearchParams] = useSearchParams({page: "1"})
	const category = searchParams.get("category") || "all";
	const search = searchParams.get("search") || "";
	const page = searchParams.get("page") || "1";
	

	const currentUri = useMemo(() => {

		let params = {
			search : search,
			category : category,
			page : page
		}

		let query = new URLSearchParams(params)

		return `/home/${type}?${query}`
	},[type,searchParams])

	const setQueryParams = (newQuery) => {

		setSearchParams((prevSearchParams) => {
			let prevQuery = Object.fromEntries([...prevSearchParams])
			return {...prevQuery, ...newQuery}
		});
	}

	return {
		currentUri,
		type,
		setQueryParams,
		category,
		search,
		page,
	}
}