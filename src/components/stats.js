export default function Stats({ items }) {
  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const calcPercentage = (totalPacked / totalItems) * 100;
  return (
    <footer className="stats">
      {calcPercentage === 100
        ? "you Got everything READY to GO"
        : `You have ${totalItems} and already packed ${totalPacked} (
        ${Math.trunc(calcPercentage) || 0}%)
      `}
    </footer>
  );
}
