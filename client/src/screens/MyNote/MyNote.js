import React, { useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import notes from "../../components/data/notes";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const MyNote = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      // Handle deletion logic here
    }
  };

  const fetchDate = async () => {
    const datḁ = await axios.get("api/notes");
    console.log("🚀 ~ fetchDate ~ datḁ:", datḁ);
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <MainScreen title={"Welcome AI"}>
      <Link to="/createNote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create a Note
        </Button>
      </Link>
      <div>
        {notes.map((note, index) => (
          <Accordion key={note._id}>
            <Card style={{ margin: 10 }} key={note._id}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {note.title}
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <ReactMarkdown>{note.content}</ReactMarkdown>
                    <footer className="blockquote-footer">
                      Created on
                      <cite title="Source Title">
                        {note.createdAt ? note.createdAt.substring(0, 10) : ""}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        ))}
      </div>
    </MainScreen>
  );
};

export default MyNote;
