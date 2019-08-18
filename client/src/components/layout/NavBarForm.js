import React, { useState, useContext } from 'react';
import ProfileContext from '../../context/profile/profileContext';
import { Icon, Input, Form, Select, Button } from 'antd';
const { Option } = Select;

const NavBarForm = () => {
  const profileContext = useContext(ProfileContext);

  const [formData, setFormData] = useState({
    platform: 'origin',
    gamertag: ''
  });
  const [validationStatus, setValidationStatus] = useState('');

  const { platform, gamertag } = formData;
  const {
    getProfile,
    fetchData,
    profileError,
    clearProfile,
    setLoading
  } = profileContext;

  const onSubmit = async e => {
    e.preventDefault();

    if (!gamertag) setValidationStatus('error');
    else {
      setLoading();
      setValidationStatus('');
      clearProfile();
      getProfile(platform, gamertag, true);
    }
  };

  return (
    <Form layout='inline' onSubmit={e => onSubmit(e)}>
      <Form.Item>
        <h1>- Apex Legends Tracker -</h1>
      </Form.Item>
      <div style={{ float: 'right' }}>
        <Form.Item validateStatus={validationStatus} hasFeedback>
          <Input
            className='navbar-form-input'
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder='Gamertag'
            name='gamertag'
            onChange={e =>
              setFormData({ ...formData, gamertag: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item>
          <Select
            className='navbar-form-input'
            name='platform'
            defaultValue='Origin'
            onChange={e => setFormData({ ...formData, platform: e })}
          >
            <Option value='origin'>Origin</Option>
            <Option value='psn'>Playstation</Option>
            <Option value='xbl'>Xbox</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          {fetchData ? (
            <Button type='primary' className='navbar-btn' loading>
              Loading...
            </Button>
          ) : profileError ? (
            <Button type='danger' className='navbar-btn'>
              {profileError}
            </Button>
          ) : (
            <Button type='primary' htmlType='submit' className='navbar-btn'>
              Search
            </Button>
          )}
        </Form.Item>
      </div>
    </Form>
  );
};

export default NavBarForm;
