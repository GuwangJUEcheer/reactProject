import React, { useState } from 'react';
import { Button, Form, Modal, Nav, Tab, Alert, Container, Row, Col } from 'react-bootstrap';
import Editor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import '../css/publish.css'

const PublishForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tag: '',
    id: null, // Assuming ID is null for new posts and updated for edits
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
  };

  const selectTag = (tag) => {
    setFormData({
      ...formData,
      tag: tag,
    });
  };

  // Assuming `tags` is an array of categories, each with a name and a tags array
  const tags = []; // Placeholder for actual tags data

  return (
    <Container className="main main-content">
      <Row>
        <Col lg={9} md={12} sm={12} xs={12}>
          <h5>
            <span className="glyphicon glyphicon-plus" aria-hidden="true">发起提问</span> 
          </h5>
          <hr />
          <Form onSubmit={handleSubmit}>
            <input type="hidden" value={formData.id} />
            <Form.Group>
              <Form.Label>问题标题（简单扼要）:</Form.Label>
              <Form.Control
                type="text"
                placeholder="问题标题……"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>问题补充 (必填，请参照右侧提示):</Form.Label>
              {/* Integrate Editor */}
              <Editor
                value={formData.description}
                onChange={({ text }) => setFormData({ ...formData, description: text })}
                placeholder="请输入问题描述"
                style={{ height: '400px' }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>添加标签:</Form.Label>
              <Form.Control
                type="text"
                placeholder="输入标签，以逗号号分隔"
                name="tag"
                value={formData.tag}
                onChange={handleInputChange}
                autoComplete="off"
              />
              {/* Tags Tab Selection (Simplified) */}
              <Tab.Container id="tags-tab" defaultActiveKey={tags[0]?.name}>
                <Nav variant="tabs">
                  {tags.map((category) => (
                    <Nav.Item key={category.name}>
                      <Nav.Link eventKey={category.name}>{category.name}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <Tab.Content>
                  {tags.map((category) => (
                    <Tab.Pane eventKey={category.name} key={category.name}>
                      {category.tags.map((tag) => (
                        <Button key={tag} variant="outline-primary" onClick={() => selectTag(tag)}>
                          {tag}
                        </Button>
                      ))}
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button type="submit" className="btn-success btn-publish">发布</Button>
          </Form>
        </Col>
        <Col lg={3} md={12} sm={12} xs={12}>
          <h4>问题发起指南</h4>
          <p>
            • 问题标题: 请用精简的语言描述您发布的问题，不超过25字 <br />
            • 问题补充: 详细<br />
            • 选择标签: 选择一个或者多个合适的标签，用逗号隔开，每个标签不超过10个字<br />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PublishForm;
