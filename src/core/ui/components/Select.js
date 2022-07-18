import PropTypes, { string } from 'prop-types'

export const Select = ({ options, ...selectProps }) => (
  <select {...selectProps}>
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
)

const option = PropTypes.shape({ value: string, label: string })

Select.propTypes = {
  options: PropTypes.arrayOf(option).isRequired,
}
