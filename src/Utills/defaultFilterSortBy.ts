export const defaultFilterSortBy = (value: string) => {
	switch (value) {
		case "дешевле": {
			return "price-asc"
		}
		case "дороже": {
			return "price-desc"
		}
		case "по названию A-Z": {
			return "title-asc"
		}
		case "по названию Z-A": {
			return "title-desc"
		}
		default: {
			return "price-asc"
		}
	}

}