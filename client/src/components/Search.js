import React, { useState } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';

const Search = () => {
  const [formData, setFormData] = useState({
    platform: '',
    gamertag: ''
  });

  const { Option } = Select;

  const onSubmit = e => {
    e.preventDefault();

    console.log(formData);
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-search'>
      <h1>Track Player Stats</h1>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Item>
          <label htmlFor='platform'>Platform</label>
          <Select
            name='platform'
            defaultValue='Origin'
            onChange={e => setFormData({ ...formData, platform: e })}
          >
            <Option value='Origin'>Origin</Option>
            <Option value='psn'>Playstation</Option>
            <Option value='xbl'>Xbox</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <label htmlFor='gamertag'>
            Gamertag
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Origin ID, PSN ID, Xbox Live gamertag'
              name='gamertag'
              onChange={e => onChange(e)}
            />
          </label>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Search;
