import { formatter } from "../util/investment";

export default function Result({ annualData }) {
  let totalInterest = 0;
  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest(Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((item) => {
          console.log("anual data", item);
          totalInterest += item.interest;
          return (
            <tr id={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(item.valueEndOfYear-totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
