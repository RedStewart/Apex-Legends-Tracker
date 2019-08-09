import React, { useState, useContext, useEffect } from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';
import AlertContext from '../context/alert/alertContext';
import ProfileContext from '../context/profile/profileContext';
import Alert from './layout/Alert';

const Search = ({ history, form }) => {
  const alertContext = useContext(AlertContext);
  const profileContext = useContext(ProfileContext);

  const [formData, setFormData] = useState({
    platform: 'origin',
    gamertag: ''
  });

  const { Option } = Select;
  const { getProfile, loading, profileError } = profileContext;
  const { platform, gamertag } = formData;
  const { getFieldDecorator, validateFields } = form;

  const onSubmit = async e => {
    e.preventDefault();

    validateFields(async (err, values) => {
      if (!err) {
        const resError = await getProfile(platform, gamertag);

        if (!resError) {
          history.push(`/profile/${platform}/${gamertag}`);
        }
      }
    });
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
            <Option value='origin'>Origin</Option>
            <Option value='psn'>Playstation</Option>
            <Option value='xbl'>Xbox</Option>
          </Select>
        </Form.Item>

        <Form.Item className='item-search'>
          {getFieldDecorator('gamertag', {
            rules: [{ required: true, message: 'Please input a gamertag' }]
          })(
            <label htmlFor='gamertag'>
              Gamertag
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Origin ID, PSN ID, Xbox Live gamertag'
                size='large'
                name='gamertag'
                onChange={e =>
                  setFormData({ ...formData, gamertag: e.target.value })
                }
              />
            </label>
          )}
        </Form.Item>
        <Alert />
        <Form.Item>
          {loading ? (
            <Button type='primary' size='large' className='btn-search' loading>
              Loading...
            </Button>
          ) : profileError ? (
            <Button type='danger' size='large' className='btn-search'>
              {profileError}
            </Button>
          ) : (
            <Button
              type='primary'
              htmlType='submit'
              size='large'
              className='btn-search'
            >
              Submit
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create()(Search);
