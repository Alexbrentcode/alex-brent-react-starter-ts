const formatCurrency = (value: number, locale: string, currency: string) => {
  return new Intl.NumberFormat(locale, {
    currency: currency,
    style: "currency",
  }).format(value);
};

const formatDateString = (date: string) => {
  const dateString = new Date(date).toDateString();

  return dateString.slice(4, 10);
};

export { formatCurrency, formatDateString };
