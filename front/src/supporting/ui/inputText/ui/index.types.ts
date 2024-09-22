export type InputTextProps = {
  defaultValue: string
  value: string
  onChange: (value: string) => void
  status?: 'error' | 'warning'
}
