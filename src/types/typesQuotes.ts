export type QuotesTypes = {
  id: string,
  quote: string,
  image: string,
  color: string
}

export interface QuotesProps  {
  quotes: QuotesTypes[]
}