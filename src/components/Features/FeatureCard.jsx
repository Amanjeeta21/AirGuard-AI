function FeatureCard({ icon: Icon, title, text }) {
  return (
    <article className="feature-card glass reveal">
      <div className="feature-card__icon">
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default FeatureCard;
