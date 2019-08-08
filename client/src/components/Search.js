import React, { useState, useContext } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';
import AlertContext from '../context/alert/alertContext';
import Alert from './layout/Alert';

const Search = ({ history }) => {
  const alertContext = useContext(AlertContext);

  const [formData, setFormData] = useState({
    platform: 'Origin',
    gamertag: ''
  });

  const { Option } = Select;

  const onSubmit = e => {
    e.preventDefault();
    if (!formData.gamertag) {
      alertContext.setAlert('Please enter a gamertag', 'error', 3000);
    } else {
      history.push(`/profile/${formData.platform}/${formData.gamertag}`);
    }
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-search'>
      <h1>Apex Legends Tracker</h1>
      <hr />
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Item className='item-search'>
          <label htmlFor='platform'>Platform</label>
          <Select
            size='large'
            name='platform'
            defaultValue='Origin'
            onChange={e => setFormData({ ...formData, platform: e })}
          >
            <Option value='Origin'>Origin</Option>
            <Option value='psn'>Playstation</Option>
            <Option value='xbl'>Xbox</Option>
          </Select>
        </Form.Item>

        <Form.Item className='item-search'>
          <label htmlFor='gamertag'>
            Gamertag
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='Origin ID, PSN ID, Xbox Live gamertag'
              size='large'
              name='gamertag'
              onChange={e => onChange(e)}
            />
          </label>
        </Form.Item>
        <Alert />
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            size='large'
            className='btn-search'
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Search;
