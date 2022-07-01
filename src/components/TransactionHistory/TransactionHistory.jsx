import PropTypes from 'prop-types';
import s from "./TransactionHistory.module.css"

function TransactionHistory({ items }) {
    return (
        <table className={s.transaction_history}>
  <thead className={s.title}>
    <tr>
      <th className={s.title_item}>Type</th>
      <th className={s.title_item}>Amount</th>
      <th className={s.title_item}>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(item => (<tr key={item.id} className={s.table_row}>
                    <td className={s.table_data}>{item.type}</td>
                    <td className={s.table_data}>{item.amount}</td>
                    <td className={s.table_data}>{item.currency}</td>
                </tr>))}
  
  </tbody>
</table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),
    )
}