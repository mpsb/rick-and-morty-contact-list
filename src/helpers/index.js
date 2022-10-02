export default function dateFormatter(date) {
  return new Date(date).toISOString().split("T")[0];
}
