type ProductSpecTableProps = {
  rows: Array<{ label: string; value: string }>;
};

export function ProductSpecTable({ rows }: ProductSpecTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface">
      <table className="w-full border-collapse text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-b-0">
              <th className="w-1/3 bg-surface-strong px-4 py-3 font-semibold text-brand">{row.label}</th>
              <td className="px-4 py-3 leading-6 text-muted">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
