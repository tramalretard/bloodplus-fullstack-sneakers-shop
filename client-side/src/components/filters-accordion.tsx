import { AccordionBrand } from './accordions/accordion-brand'
import { AccordionColor } from './accordions/accordion-color'
import { AccordionPrice } from './accordions/accordion-price'
import { AccordionSeason } from './accordions/accordion-season'
import { Accordion } from './ui/accordion'
import React from 'react'

interface Props {
	selectedBrands: string[]
	handleBrandChange: (brandSlug: string) => void
	selectedSeasons: string[]
	handleSeasonChange: (seasonSlug: string) => void
	selectedColors: string[]
	handleColorChange: (colorSlug: string) => void
	priceRange: [number, number]
	handlePriceChange: (values: [number, number]) => void
	isBrandFilterDisabled?: boolean
	isSeasonFilterDisabled?: boolean
	openAccordionItems: string[]
	onOpenChange: (items: string[]) => void
}

export const FiltersAccordion: React.FC<Props> = ({
	selectedBrands,
	handleBrandChange,
	selectedSeasons,
	handleSeasonChange,
	selectedColors,
	handleColorChange,
	priceRange,
	handlePriceChange,
	isBrandFilterDisabled,
	isSeasonFilterDisabled,
	openAccordionItems,
	onOpenChange,
}) => {
	return (
		<Accordion
			type="multiple"
			value={openAccordionItems}
			onValueChange={onOpenChange}
			className="w-[320px]"
		>
			<AccordionBrand
				isEnabled={openAccordionItems.includes('brand')}
				selectedItems={selectedBrands}
				onItemChange={handleBrandChange}
				isDisabled={isBrandFilterDisabled}
			/>
			<AccordionSeason
				isEnabled={openAccordionItems.includes('season')}
				selectedItems={selectedSeasons}
				onItemChange={handleSeasonChange}
				isDisabled={isSeasonFilterDisabled}
			/>
			<AccordionColor
				isEnabled={openAccordionItems.includes('color')}
				selectedItems={selectedColors}
				onItemChange={handleColorChange}
			/>
			<AccordionPrice values={priceRange} onPriceChange={handlePriceChange} />
		</Accordion>
	)
}
