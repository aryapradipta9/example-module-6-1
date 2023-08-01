export function Post(props) {
  const { title, body } = props;

  return (
    <div
      style={{
        margin: "24px",
        backgroundColor: "#F0F0F0",
        borderRadius: "16px",
        padding: "4px 8px",
      }}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
