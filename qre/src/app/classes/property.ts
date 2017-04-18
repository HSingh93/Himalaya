export class Property {
    property_name: string;
    property_address: string;
    square_footage: number;
    units: number;
    rental_assumption: number;
    hold_period: number;
    market_rent_growth: number;
    vacancy_rate: number;
    exit_cap_rate: number;
    cost_of_sale: number;
    real_estate_taxes: number;
    other_expenses: number;
    required_return: number;

    suggested_price?: number;
}