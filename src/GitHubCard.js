import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/Fok9nSHA4oI-XqcgvUB0ejUWsgDWkjKYqgGTyyiT9jVoWFVjs9nWX9wA7Z9y7kTS_UclFwAi81pk6SZ9ypBZ2eFDlIyfQZA_uqspmw=w1400-k" />
      <Card.Body>
        <Card.Title>Mason Matthews</Card.Title>
        <Card.Text style={{ color:'black' }}>
          This is some Text About Me.
        </Card.Text>
        <Button variant="primary" href='https://github.com/Mason-Matthews' >Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
}

export default GitHubCard;
