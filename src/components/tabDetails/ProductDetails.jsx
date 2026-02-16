import { useOutletContext } from "react-router-dom";

export function ProductDetails({ details: detailsProp = [] }) {
  const outlet = useOutletContext();
  const details = detailsProp.length ? detailsProp : outlet?.details ?? [];

  return (
    <div className="space-y-2 text-sm text-gray-600">
      {details.map((item, i) => (
        <p key={i}>
          <strong>{item.label}:</strong> {item.value}
        </p>
      ))}
    </div>
  );
}
