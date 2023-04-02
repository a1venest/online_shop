export const defaultSortBy = (value: string) => {
	switch (value) {
		case "price-asc": {
			return "дешевле" as const
		}
		case "price-desc": {
			return "дороже" as const
		}
		case "title-asc": {
			return "по названию A-Z" as const
		}
		case "title-desc": {
			return "по названию Z-A" as const
		}
		default: {
			return "дешевле" as const
		}
	}

}