import Card from "react-bootstrap/Card";

function BasicCard({ item }) {
  console.log("1233",item.image)
  return (
    <Card
      style={{
        width: 330,
        height: 500,
        border: "1px solid rgb(49, 54, 61)",
        backgroundColor: "#0d1117",
        color: "rgba(255, 255, 255, 0.5)",
        marginBottom:"100px"
      }}
    >
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.topic}</Card.Title>
        <Card.Text className="mt-3">{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
