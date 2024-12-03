export const Translate = ({ children, className = "", yes = false }) => {
  const translationClass = yes ? "" : "notranslate";

  const translationAttribute = yes ? "yes" : "no";
  const combinedClassName = `${translationClass} ${className}`.trim();

  return (
    <div translate={translationAttribute} className={combinedClassName}>
      {children}
    </div>
  );
};
