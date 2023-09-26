export type Recipe = {
    name: string,
    ingredients: string[],
    health_restored: number,
    num_carried?: number,
}